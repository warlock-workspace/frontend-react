from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask import Flask, request, jsonify, render_template
from datetime import datetime
import os
import base64

# Define the Flask application
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/property_management'
db = SQLAlchemy(app)
CORS(app)
migrate = Migrate(app, db)


# Define the Property model
class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    property_name = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, default=0.0)
    description = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=True)
    location = db.Column(db.String(100), nullable=True)
    attachments = db.Column(db.LargeBinary, nullable=True)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, property_name, amount, description, category, location):
        self.property_name = property_name
        self.amount = amount
        self.description = description
        self.category = category
        self.location = location

    def to_dict(self):
        return {
            'id': self.id,
            'property_name': self.property_name,
            'description': self.description,
            'amount': self.amount,
            'category': self.category,
            'location': self.location,
            'created_on': self.created_on.isoformat(),
        }


# Define routes
@app.route('/', methods=['GET'])
def index():
    properties = Property.query.order_by(Property.id.asc()).all()
    property_list = [{'property_name': prop.property_name, 'amount': prop.amount, 'description': prop.description} for prop in properties]
    return render_template('homepage.html', properties=property_list)

@app.route('/properties', methods=['POST'])
def create_property():
    data = request.json
    property_name = data.get('property')
    description = data.get('description')
    location = data.get('location')
    category = data.get('category')
    amount = data.get('value')
    attachments = data.get('attachments')

    # Create property object
    new_property = Property(property_name=property_name, amount=amount, description=description, category=category, location=location)

    # Process attachments if available
    if attachments:
        for attachment in attachments:
            attachment_path = find_attachment(attachment['path'])
            if attachment_path:
                with open(attachment_path, 'rb') as file:
                    image_data = file.read()
                    decoded_image_data = base64.b64encode(image_data)
                    new_property.attachments = decoded_image_data
            else:
                print(f'Attachment {attachment["path"]} not found. Skipping...')

    # Add property to session and commit changes
    db.session.add(new_property)
    db.session.commit()

    if attachments:
        return jsonify(new_property.to_dict()), 201
    else:
        return jsonify({'message': 'Property created successfully'}), 201


    # Return response
    return jsonify({'message': 'Property created successfully'}), 201


def find_attachment(filename):
    home_directory = os.path.expanduser("~")
    search_paths = [home_directory, '/other/directory/path']  # Add additional directories to search here
    for directory in search_paths:
        attachment_path = os.path.join(directory, 'Downloads', filename)
        if os.path.exists(attachment_path):
            return attachment_path
    return None



@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.order_by(Property.id.asc()).all()
    property_list = [prop.to_dict() for prop in properties]
    return jsonify({'properties': property_list})


@app.route('/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property_to_delete = Property.query.get_or_404(id)
    db.session.delete(property_to_delete)
    db.session.commit()
    return f'Deleted property with ID {id}', 204


@app.route('/properties/<int:id>', methods=['PUT'])
def update_property(id):
    property_to_update = Property.query.get_or_404(id)
    data = request.json
    description = data.get('description')
    if description is not None:
        property_to_update.description = description
        property_to_update.created_on = datetime.utcnow()
        db.session.commit()
        return f"Property with ID {id} updated successfully!"
    else:
        return "Description field is missing in the request data.", 400


if __name__ == '__main__':
    app.run(debug=True)

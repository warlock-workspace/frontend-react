// static/js/main.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/properties')
        .then(response => response.json())
        .then(data => {
            const propertiesDiv = document.getElementById('properties');
            data.forEach(property => {
                const propertyElem = document.createElement('div');
                propertyElem.innerHTML = `
                    <p>Address: ${property.address}</p>
                    <p>Price: $${property.price}</p>
                    <p>Status: ${property.status}</p>
                `;
                propertiesDiv.appendChild(propertyElem);
            });
        });
});

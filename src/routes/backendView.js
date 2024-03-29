import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import "../css/backend.css"; // Import your CSS file for additional styling

const BackendView = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch properties data from the backend
      const response = await axios.get("http://localhost:5000/properties");
      setProperties(response.data.properties);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    // Implement your edit logic here, such as redirecting to an edit page
    console.log("Edit property with ID:", id);
  };

  const columns = useMemo(
    () => [
      { Header: 'Property Name', accessor: 'property_name' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Location', accessor: 'location' },
      { Header: 'Amount', accessor: 'amount' },
      { Header: 'Edit', accessor: 'id', Cell: ({ value }) => (<button type="button" className="btn btn-primary" onClick={() => handleEdit(value)}>Edit</button>) }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: properties });

  return (
    <div>
      <h2>Backend View</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <table className="table" {...getTableProps()}>
          <thead className="thead-dark">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BackendView;

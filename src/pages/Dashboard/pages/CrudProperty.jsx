import React, { useState } from "react";
import './CrudProperty.css'
import FormProperty from "../../FormProperty/FormProperty"
import Menu from "../components/Menu"

function CrudProperty() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCreateProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  const handleDeleteProperty = (index) => {
    const updateProperties = properties.filter((_, i) => i !== index);
    setProperties(updateProperties);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value); 
  };

  const filteredProperties = properties.filter((property) =>
    property.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="crud-property">
      <Menu />
      <div className="container-table">
        <div className="header">
          <h2 className="txt-primary">Tabla de Propiedades</h2>
          <input
            type="text"
            placeholder="Buscar propiedad"
            value={filter}
            onChange={handleFilterChange}
          />
          <button onClick={() => setShowForm(true)}>Crear Propiedad</button>
        </div>
        <table className="table-property">
          <thead>
            <tr>
              <th>Nombre Propiedad</th>
              <th>Descripción</th>
              <th>Rating</th>
              <th>Código Postal</th>
              <th>Tipo de Propiedad</th>
              <th>Tamaño</th>
              <th>Tipo de Renta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProperties.map((property, index) => (
              <tr key={index}>
                <td>{property.name}</td>
                <td>{property.description}</td>
                <td>{property.rating}</td>
                <td>{property.postalCode}</td>
                <td>{property.propertyType}</td>
                <td>{property.size}</td>
                <td>{property.priceType}</td>
                <td>
                  <button onClick={() => handleDeleteProperty(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-icon" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <FormProperty onCreateProperty={handleCreateProperty} />
          </div>
          <div className="modal-backdrop" onClick={() => setShowForm(false)}></div>
        </div>
      )}
    </div>
  );
}

export default CrudProperty;

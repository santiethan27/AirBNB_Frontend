import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carrusel from "./components/Carrusel";
import CardsVenta from "./components/CardsVenta";
import { useProperty } from "../../context/PropertyContext";

const HomPage = () => {
  const { propertysAll} = useProperty();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPropertys, setFilteredPropertys] = useState([]);

  const handleSearch = () => {
    const result = propertysAll.filter((property) =>
      property.propertyTypes && property.propertyTypes.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPropertys(result);
  };

  return (
    <div>
      <header className="bg-secundary">
        <section className="txt-white">
          <h2>Encuentra tu próxima estancia</h2>
          <h3>Busca ofertas en hoteles, casas y mucho más...</h3>
          <div className="selector-option">
          <input 
              type="text" 
              placeholder="Buscar.."
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="selector txt-white" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </section>
        <section>
          <img
            src="/img/HeaderHome.png"
            alt="Imagen del header relacionada con viaje"
          />
        </section>
      </header>
      <main>
        <div>
          <Carrusel />
        </div>
        <CardsVenta propertys={filteredPropertys.length > 0 ? filteredPropertys : propertysAll} />
      </main>
    </div>
  );
};

export default HomPage;

import { useState } from 'react';
import '../styles/ComponenteFilter.css';

function ComponenteFilter({ aplicarFiltros }) {
  const [tipo, setTipo] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    aplicarFiltros({ tipo, edad, sexo });
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <h2 className="filter-title">Filtrar Mascotas</h2>
      <label className="filter-label">Tipo de Mascota</label>
      <select className="filter-select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Todos</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>

      <label className="filter-label">Edad</label>
      <select className="filter-select" value={edad} onChange={(e) => setEdad(e.target.value)}>
        <option value="">Todas</option>
        <option value="Cachorro">Cachorro</option>
        <option value="Adulto">Adulto</option>
        <option value="menor_5_meses">Menos de 5 meses</option>
        <option value="5_meses_a_1_ano">5 meses - 1 año</option>
        <option value="1_ano_a_2_anos">1 año - 2 años</option>
        <option value="mas_de_2_anos">Más de 2 años</option>
      </select>

      <label className="filter-label">Sexo</label>
      <select className="filter-select" value={sexo} onChange={(e) => setSexo(e.target.value)}>
        <option value="">Ambos</option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>

      <button className="filter-button" type="submit">Aplicar Filtros</button>
    </form>
  );
}

export default ComponenteFilter;
import './App.css';
import { useState } from 'react';
import ComponenteFilter from './components/ComponenteFilter';
import ComponenteListaMascotas from './components/ComponenteListaMascotas';
import ComponenteFormulario from './components/ComponenteFormulario';

function App() {
  const [pantalla, setPantalla] = useState('filter');  // Controla la pantalla actual
  const [filtros, setFiltros] = useState({});          // Almacena los filtros aplicados
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);  // Mascota seleccionada

  const aplicarFiltros = (filtrosAplicados) => {
    setFiltros(filtrosAplicados);
    setPantalla('lista');  // Pasar a la lista de mascotas
  };

  const seleccionarMascota = (mascota) => {
    setMascotaSeleccionada(mascota);
    setPantalla('formulario');  // Pasar al formulario de adopción
  };

  const volver = () => {
    if (pantalla === 'formulario') {
      setPantalla('lista');
    } else if (pantalla === 'lista') {
      setPantalla('filter');
    }
  };

  return (
    <div>
      {pantalla === 'filter' && <ComponenteFilter aplicarFiltros={aplicarFiltros} />}
      {pantalla === 'lista' && <ComponenteListaMascotas filtros={filtros} seleccionarMascota={seleccionarMascota} volver={volver} />}
      {pantalla === 'formulario' && <ComponenteFormulario mascota={mascotaSeleccionada} volver={volver} />}
    </div>
  );
}

export default App;
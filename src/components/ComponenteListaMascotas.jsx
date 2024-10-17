import { useState, useEffect } from 'react';

function ComponenteListaMascotas({ filtros, seleccionarMascota, volver }) {
  const [mascotas, setMascotas] = useState([]); // Inicializar como array vacío

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => {
        console.log('Datos recibidos de la API:', data); // Log para verificar la estructura
        // Acceder al array de mascotas desde data
        if (Array.isArray(data.data)) { // Aquí ajustamos para acceder a data
          setMascotas(data.data);
        } else {
          console.error('La respuesta de la API no contiene un array en data:', data);
        }
      })
      .catch(error => console.error('Error al obtener mascotas:', error));
  }, []);

  // Asegurarse de que mascotas es un array antes de usar .filter()
  
  const filtrarPorEdad = (mascota) => {
    const edadString = mascota.edad;
    const edadNumero = parseInt(edadString); // Extrae el número de la cadena

    if (filtros.edad === 'menor_5_meses') {
      return edadString.includes('Mes') && edadNumero < 5;
    } else if (filtros.edad === '5_meses_a_1_ano') {
      return (edadString.includes('Mes') && edadNumero >= 5 && edadNumero <= 12) ||
             (edadString.includes('Año') && edadNumero === 1);
    } else if (filtros.edad === '1_ano_a_2_anos') {
      return (edadString.includes('Año') && edadNumero > 1 && edadNumero < 2);
    } else if (filtros.edad === 'mas_de_2_anos') {
      return edadString.includes('Año') && edadNumero >= 2;
    }
    return true; // Si no hay filtro aplicado, incluye la mascota
  };

  
  const mascotasFiltradas = Array.isArray(mascotas)
    ? mascotas.filter(mascota => {
        return (filtros.tipo ? mascota.tipo === filtros.tipo : true) &&
               (filtros.sexo ? mascota.genero === filtros.sexo : true) &&
               filtrarPorEdad(mascota);
      })
    : [];
//Array de mascotas para contener la lista de mascotas filtradas
  return (
    <div>
      <button onClick={volver}>Volver a filtros</button>
      <h2>Lista de Mascotas</h2>
      <div className="lista-mascotas">
        {mascotasFiltradas.map(mascota => (
          <div key={mascota.id} onClick={() => seleccionarMascota(mascota)} className="mascota-card">
            <img src={mascota.imagen} alt={mascota.nombre} className="mascota-imagen" />
            <h3>{mascota.nombre}</h3>
            <p>Edad: {mascota.edad}</p>
            <p>Género: {mascota.genero}</p>
          </div>
        ))}
      </div>
      {mascotasFiltradas.length === 0 && <p>No se encontraron mascotas que coincidan con los filtros.</p>}
    </div>
  );
}

export default ComponenteListaMascotas;

import { useState } from 'react';

function ComponenteFormulario({ mascota, volver }) {
  const [solicitud, setSolicitud] = useState({
    nombre: '',
    email: '',
    direccion: '',
    motivo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSolicitud(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitud de adopción:', { ...solicitud, mascota });
    setSolicitud({
      nombre: '',
      email: '',
      direccion: '',
      motivo: ''
    });
    volver();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={volver}>Volver a la lista</button>
      <h2>Formulario de Adopción</h2>
      <img src={mascota.imagen} alt={mascota.nombre} className="mascota-imagen" />
      <p><strong>Nombre:</strong> {mascota.nombre}</p>
      <p><strong>Edad:</strong> {mascota.edad}</p>
      <p><strong>Género:</strong> {mascota.genero}</p>
      <div dangerouslySetInnerHTML={{ __html: mascota.desc_personalidad }} />
      <div dangerouslySetInnerHTML={{ __html: mascota.desc_adicional }} />

      <label>Tu nombre</label>
      <input type="text" name="nombre" onChange={handleChange} required />

      <label>Tu email</label>
      <input type="email" name="email" onChange={handleChange} required />

      <label>Dirección</label>
      <input type="text" name="direccion" onChange={handleChange} required />

      <label>Motivo de adopción</label>
      <textarea name="motivo" onChange={handleChange} required />

      <button type="submit">Enviar Solicitud</button>
    </form>
  );
}

export default ComponenteFormulario;

import React,{useState} from 'react'





function Conctatanos() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

    
  

     

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const whatsappLink = `https://wa.me/34695941016?text=${encodeURIComponent(
        `Nombre: ${formData.firstName} ${formData.lastName} ` +
          `Teléfono: ${formData.phoneNumber} ` +
          `Correo electrónico: ${formData.email} ` +
          `Asunto: ${formData.subject} ` +
          `Mensaje: ${formData.message} `
      )}`;
  
      window.open(whatsappLink, '_blank');


        console.log('Datos del formulario:', formData);
        // Resetear el formulario después de enviar.
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          subject: '',
          message: '',
        });
      };
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-[#323886]'>

        <div className='bg-[#EC8F5E] flex flex-col rounded-xl'>
          
        <form onSubmit={handleSubmit} className='flex flex-col box-content p-10 rounded-lg'>
        <h1 className='text-2xl p-2 font-oswald uppercase text-white'>Conctatanos</h1>
      <label htmlFor="firstName" className='font-oswald uppercase text-white'>Nombre:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName"  className='font-oswald uppercase text-white'>Apellido:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneNumber"  className='font-oswald uppercase text-white'>Número de Teléfono:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="email"  className='font-oswald uppercase text-white'>Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject"  className='font-oswald uppercase text-white'>Asunto:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message"  className='font-oswald uppercase text-white'>Mensaje:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase border">Enviar</button>
    </form>
        </div>

    </div>
  )
}

export default Conctatanos
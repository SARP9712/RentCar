const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();




app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sevillarentacar@gmail.com',  // Reemplaza con tu dirección de correo
    pass: 'codqwcvjwiyijwds',        // Reemplaza con tu contraseña
  },
});








 










app.post('/enviar-correo-y-procesar-reserva', async (req, res) => {
  try {
    const datosDelFormulario = req.body;
   
    const {
      orderNumber,
      fechaFormateada,
      precioTotal,
      carModel,
      sucursalEntrega,
      diadejada,
      horadejada,
      sucursalRecogida,
      diaRecogida,
      horaRecogida,
  
      clientEmail,
      clientName,
      ClientLastName,
      clientPhone,
    } = datosDelFormulario;
    const contenidoCorreo = `
    
    <html>
    <head>
      <style>
        /* Aquí puedes agregar estilos CSS para dar formato al contenido del correo */
        body {
          font-family: 'Arial', sans-serif;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
  
        img {
          width: 40%;
        }
  
        .Contactanos {
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        .contactanos-datos {
          display: flex;
          flex-direction: column;
        }
      </style>
    </head>
    <body>
    <style>
    /* Aquí puedes agregar estilos CSS para dar formato al contenido del correo */
    body {
      font-family: 'Arial', sans-serif;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    img {
      width: 40%;
    }

    .Contactanos {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contactanos-datos {
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <h2>Detalles de la Reserva</h2>
  <table>
    <tr>
      <th>Número de Orden:</th>
      <td>#${orderNumber}</td>
    </tr>
    <tr>
      <th>Fecha de Reserva:</th>
      <td>${fechaFormateada}</td>
    </tr>
    <!-- Agrega más filas según sea necesario -->
  </table>

  <h2>Detalles del Alquiler</h2>
  <table>
    <tr>
      <th>Producto:</th>
      <td>${carModel}</td>
    </tr>
    <tr>
    <th>Dia de Entrega:</th>
    <td>${diaRecogida}</td>
    <tr>
    <th>Dia de Recogida:</th>
    <td>${diadejada}</td>
  </tr>
  </tr>


    <tr>
      <th>Lugar de Entrega:</th>
      <td>${sucursalEntrega}</td>
      <th>Hora de Entrega:</th>
      <td>${horadejada}</td>

      <th>Lugar de Devolucion:</th>
      <td>${sucursalRecogida}</td>
      <th>Hora de Devolucion:</th>
      <td>${horaRecogida}</td>
    </tr>


    <!-- Agrega más filas según sea necesario -->
  </table>

  <h2>Detalles del Pago</h2>
  <table>
    <tr>
      <th>Total:</th>
      <td>${precioTotal}€</td>
    </tr>
    <!-- Agrega más filas según sea necesario -->
    <tr>
      <th>Correo Electrónico del Cliente:</th>
      <td>${clientEmail}</td>
    </tr>
    <tr>
      <th>Nombre del Cliente:</th>
      <td>${clientName} ${ClientLastName}</td>
    </tr>
    <tr>
      <th>Número de Teléfono del Cliente:</th>
      <td>${clientPhone}</td>
    </tr>
  </table>

  <div class="Contactanos">
    <img class="img" src="https://sevillarentcar.com/assets/Logo-92ad4549.png" alt="Logo" />

    <div class="contactanos-datos">
      <h2>Contactanos</h2>
      <p>Sevilla Rent a Car</p>
      <p>+34 695 94 10 16</p>
      <h2>Dirección</h2>
      <p>Calle Vergara 3, 41003 Sevilla Capital</p>
    </div>
  </div>
</body>
</html>
  </html>
  `;
 

  console.log(precioTotal)
  
    const mensajeCorreo = {
      from: 'alonsopaez1206@gmail.com',
      to:[ clientEmail, 'sevillarentacar@gmail.com'], // Reemplaza con el correo del destinatario
      subject: 'Confirmación de reserva',
      html: contenidoCorreo,
      // Puedes personalizar el contenido del correo según tus necesidades
    };

    await transporter.sendMail(mensajeCorreo);

    res.status(200).json({ mensaje: 'Reserva procesada con éxito' });
  } catch (error) {
    console.error('Error al procesar la reserva y enviar el correo', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

const puerto = process.env.PORT || 3001;  // El puerto puede variar según tu configuración
app.listen(puerto, () => {
  console.log(`Servidor backend escuchando en el puerto ${puerto}`);
});
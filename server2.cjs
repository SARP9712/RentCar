const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const redsysEasy = require('redsys-easy');



const path = require('path'); 
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de Redsys
const redsys = {
  merchantCode: '340711985',
  terminal: '1',
  currency: '978', // Código de divisa para Euros
  secretKey: 'sq7HjrUOBfKmC576ILgskD5srU870gJ7',
  encryptionType: 'SHA256', // Puedes ajustar esto según tus necesidades
  // ...otros campos según tus necesidades
};
console.log(typeof redsysEasy);

// Ruta para iniciar el pago
app.post('/realizarPago', (req, res) => {


    const mensajeDecodificado = decodeURIComponent(req.params.mensaje);

  // Imprime el mensaje decodificado
  console.log('Mensaje decodificado:', mensajeDecodificado);

  // Puedes enviar una respuesta al cliente si es necesario
  res.send('Mensaje recibido correctamente');
    try {
        const datosRecibidos = req.body;
        console.log('Datos recibidos del frontend:', datosRecibidos);
    
        // Puedes acceder a los campos específicos, por ejemplo:
        const { clientName, clientEmail, productName, productPrice } = datosRecibidos;
        console.log('Nombre del cliente:', clientName);
        console.log('Email del cliente:', clientEmail);
        console.log('Nombre del producto:', productName);
        console.log('Precio del producto:', productPrice);
    
        // ... Resto del código para procesar el pago
        const paymentUrl = 'https://sandbox.redsys.es';
        // res.status(200).json({ mensaje: 'Datos recibidos correctamente' });// Aquí procesa los datos del formulario y construye la URL del TPV virtual
  // Redirige al usuario a la URL del TPV virtual
//   const paymentGateway = redsysEasy(redsys);
  // ... lógica para construir la URL y redirigir al usuario
} catch (error) {
    console.error('Error al procesar los datos del frontend:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

// Ruta para manejar el retorno del TPV virtual
app.post('/retorno-tpv', (req, res) => {
  // Aquí procesa la respuesta del TPV virtual
  // Actualiza el estado del pago en tu aplicación
  console.log('Respuesta del TPV virtual:', req.body);
  res.send('Pago completado');
});

// ... otras rutas y configuraciones según sea necesario
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

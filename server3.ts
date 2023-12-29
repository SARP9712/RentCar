import express from 'express';
import bodyParser from 'body-parser';
import { createRedsysAPI, SANDBOX_URLS, randomTransactionId } from 'redsys-easy';

const app = express();
const port = 3001;

app.use(bodyParser.json());

const {
  createRedirectForm,
  processRestNotification,
} = createRedsysAPI({
  urls: SANDBOX_URLS,
  secretKey: 'sq7HjrUOBfKmC576ILgskD5srU870gJ7',
});

const merchantInfo = {
  DS_MERCHANT_MERCHANTCODE: '999008881',
  DS_MERCHANT_TERMINAL: '1',
} as const;

app.post('/realizarPago', async (req, res) => {
  try {
    const orderId = randomTransactionId();

    // ... Aquí procesas los datos del formulario y construyes la URL del TPV virtual
    // Puedes utilizar createRedirectForm para crear la URL de redirección del TPV virtual

    const form = createRedirectForm({
      ...merchantInfo,
      DS_MERCHANT_TRANSACTIONTYPE: '0', // Tipo de transacción (ejemplo: 0 para autorización)
      DS_MERCHANT_ORDER: orderId, // Número de pedido único
      // Otros campos según tus necesidades
    });

    // ... Puedes enviar la URL del TPV virtual al frontend o redirigir directamente

    res.json({ paymentUrl: form.url });
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

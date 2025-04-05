import { Router } from 'express';
import { sendOrderEmail } from '../../lib/mail/transporter';

const router = Router();

router.post('/send-order', async (req, res) => {
  const { destination, palletCount, name, phone, totalPrice } = req.body;
  
  try {
    await sendOrderEmail({ destination, palletCount, name, phone, totalPrice });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка отправки' });
  }
});

export default router;
import nodemailer from 'nodemailer';

interface OrderData {
  destination: string;
  palletCount: number;
  name: string;
  phone: string;
  totalPrice: number;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendOrderEmail = async (data: OrderData) => {
  await transporter.sendMail({
    from: `"Перевозки" <${process.env.GMAIL_USER}>`,
    to: process.env.ORDER_RECEIVER_EMAIL,
    subject: `Заказ в ${data.destination}`,
    html: `
      <h2>Детали заказа</h2>
      <p>Имя: <strong>${data.name}</strong></p>
      <p>Телефон: <strong>${data.phone}</strong></p>
      <p>Город: <strong>${data.destination}</strong></p>
      <p>Паллеты: <strong>${data.palletCount}</strong></p>
      <p>Сумма: <strong>${data.totalPrice} руб.</strong></p>
    `,
  });
};
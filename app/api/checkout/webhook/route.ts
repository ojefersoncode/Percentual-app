import { type NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

const payment = new Payment(client);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verificar se é uma notificação de pagamento
    if (body.type === 'payment') {
      const paymentId = body.data.id;

      // Buscar detalhes do pagamento
      const paymentInfo = await payment.get({ id: paymentId });

      console.log('Status do pagamento:', paymentInfo.status);
      console.log('Referência externa:', paymentInfo.external_reference);

      // Aqui você pode processar o pagamento conforme necessário
      // Por exemplo, atualizar status no banco de dados

      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Erro no webhook:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

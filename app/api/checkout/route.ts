import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { title, quantity, price, email } = await req.json();

    const numericQuantity = Number(quantity);
    const numericPrice = Number(price);

    console.log('Dados recebidos:', {
      title,
      quantity: numericQuantity,
      price: numericPrice,
      email
    });

    const preferenceData = {
      items: [
        {
          title,
          quantity: numericQuantity,
          unit_price: numericPrice,
          currency_id: 'BRL'
        }
      ],
      payer: {
        email
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/pending`
      },
      auto_return: 'approved',
      notification_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/webhook`,
      external_reference: `order_${Date.now()}`
    };

    console.log(
      'Dados da preferência:',
      JSON.stringify(preferenceData, null, 2)
    );

    const response = await fetch(
      'https://api.mercadopago.com/checkout/preferences',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferenceData)
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Erro da API do Mercado Pago:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('[v0] Resposta do Mercado Pago:', result);

    return NextResponse.json({
      init_point: result.init_point,
      id: result.id
    });
  } catch (err) {
    console.error('Erro no Mercado Pago:', err);
    return NextResponse.json(
      { error: 'Erro ao criar preferência de pagamento' },
      { status: 500 }
    );
  }
}

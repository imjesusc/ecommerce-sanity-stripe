import { NextResponse } from 'next/server'
import Stripe from 'stripe'
interface Product {
  name: string
  image: {
    url: string
  }
  price: number
  quantity: number
}

export async function POST (request: Request): Promise<NextResponse> {
  const data: Product[] = await request.json()
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? '')

  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_options: [
      { shipping_rate: 'shr_1OVLeEBY6kIj4T21ME5oDdyh' },
      { shipping_rate: 'shr_1OWDTNBY6kIj4T21ElVpeicC' }
    ],
    line_items: data.map((item: Product) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image.url]
          },
          unit_amount: item.price * 100
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1
        },
        quantity: item.quantity
      }
    }),
    success_url: `${request.headers.get('origin')}/success`,
    cancel_url: `${request.headers.get('origin')}/`
  }

  const session = await stripe.checkout.sessions.create(params)
  return NextResponse.json({ id: session.id })
}

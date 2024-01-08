import { loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<any>
const STRIPE_PUBLISABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''

const getStripe = async (): Promise<any> => {
  if (stripePromise !== null) {
    stripePromise = loadStripe(STRIPE_PUBLISABLE_KEY)
  }

  return await stripePromise
}

export default getStripe

import { loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<any>
let STRIPE_PUBLISABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISABLE_KEY)
  }

  return stripePromise
}

export default getStripe

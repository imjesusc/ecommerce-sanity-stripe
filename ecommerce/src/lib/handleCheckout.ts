import toast from 'react-hot-toast'
import getStripe from './getStripe'
import { type ProductToSendStripe } from '@/models/stripe.types'

export const handleCheckout = async (userCart: ProductToSendStripe[]): Promise<void> => {
  const stripe = await getStripe()
  const apiUrl = '/api/stripe'
  const OPTIONS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCart)
  }
  try {
    const response = await fetch(apiUrl, OPTIONS)

    if (response.status === 500) return

    const data = await response.json()

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  } catch (error) {
    toast.error('Something went wrong')
  }
}

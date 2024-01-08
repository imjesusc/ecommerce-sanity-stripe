import { type IncDecFieldProps } from '@/models/incDecField.interface'
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '../atoms/Button'

export const IncDecField = ({ quantity, decrement, increment }: IncDecFieldProps): JSX.Element => {
  return (
    <div className='grid grid-cols-3 place-content-center'>
      <Button type='icon' onClick={decrement} className='rounded-l-lg'>
        <Minus />
      </Button>
      <span className='text-center border p-2'>{quantity}</span>
      <Button type='icon' onClick={increment} className='bg-red-500 rounded-r-lg text-white border-red-500'>
        <Plus />
      </Button>
    </div>
  )
}

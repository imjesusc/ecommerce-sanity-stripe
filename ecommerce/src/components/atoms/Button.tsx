import classNames from 'classnames'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick: () => void
  type: 'primary' | 'secondary' | 'icon' | 'ghost' | 'none'
}

export const buttonClass = {
  primary:
    'rounded-lg py-2.5 px-4 bg-[#f02d34] text-white border-0 text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer z-10',
  secondary:
    'rounded-lg py-2.5 px-4 bg-white text-red border-0 text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer text-red-500',
  icon: 'text-center border p-2',
  ghost: 'rounded-lg border  hover:bg-gray-100 transition-colors',
  none: ''
}

export const Button = ({ children, type, className, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={classNames(buttonClass[type], className)} onClick={onClick}>
      {children}
    </button>
  )
}

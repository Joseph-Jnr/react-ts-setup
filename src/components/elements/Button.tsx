import React, { ReactNode, MouseEvent } from 'react'

interface ButtonProps {
  iconBefore?: ReactNode
  iconAfter?: ReactNode
  text: string
  btnClass: string
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  iconBefore,
  iconAfter,
  text,
  btnClass,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnClass} tr--flex-row-center`}
      disabled={disabled}
    >
      <span className='btn--icon--before'>{iconBefore}</span>
      <span className='btn--title'>{text}</span>
      <span className='btn--icon--after'>{iconAfter}</span>
    </button>
  )
}

export default Button

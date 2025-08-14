import React from 'react'

type TerraButtonProps = {
  label?: string
  iconSrc?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  gradient?: string // Tailwind-compatible gradient string
  padding?: string // Tailwind-compatible padding string
  img?: string // Tailwind-compatible image size string
  imgpadding?: string // Tailwind-compatible padding for the image
}

const TerraButton: React.FC<TerraButtonProps> = ({
  label = 'Talk to Us',
  iconSrc = '/button/Arrow.svg',
  onClick,
  type = 'button',
  className = '',
  gradient = 'bg-gradient-to-r from-[#f56d04] to-[#fb9709]',
  padding ='pl-4 pr-2 py-2 rounded-4xl text-xl gap-2',
  img = 'w-4',
  imgpadding = 'p-4'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative  ${gradient} flex flex-row items-center justify-center ${padding} w-fit box-border  text-left  text-white font-lufga ${className}`}
    >
      <span className="tracking-[0.04px]  leading-6 font-semibold">{label}</span>
      <span className={`bg-white rounded-full ${imgpadding}`}>
        <img className={`${img}`} src={iconSrc} alt="icon" />
      </span>
    </button>
  )
}

export default TerraButton

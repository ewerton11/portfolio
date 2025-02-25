import React from 'react'

interface ArrowProps {
  color?: string
}

const ArrowRightIcon: React.FC<ArrowProps> = ({ color = '#ffffff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="m23.542,10.892l-4.717-4.717-.707.707,4.618,4.618H0v1h22.734l-4.617,4.617.707.707,4.718-4.718c.61-.61.61-1.604,0-2.214Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowRightIcon

import React, { useState } from 'react'
import { RatingBarWrapper, RatingItem } from './styles/ReviewModal.styled'

const RatingBar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  return (
    <RatingBarWrapper>
      {Array.from(Array(10).keys()).map((_, index) => 
        <RatingItem 
          key={index} 
          $color={activeItem < 7 ? activeItem > 4 ? "#fb923c" : "#f43f5e" : "#22c55e"}
          $active={(index + 1) === activeItem} 
          onClick={() => setActiveItem(index+1)}>
            {index+1}
        </RatingItem>
      )}
    </RatingBarWrapper>
  )
}

export default RatingBar
import React from 'react'

const RatingComponent = ({rating, text, color}) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{color}}
          className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
        />
      </span>
      <span>
        <i
          style={{color}}
          className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
        />
      </span>
      <span>
        <i
          style={{color}}
          className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
        />
      </span>
      <span>
        <i
          style={{color}}
          className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
        />
      </span>
      <span>
        <i
          style={{color}}
          className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
        />
      </span>
      <span className='ml-2'>{text && text}</span>
    </div>
  )
}

RatingComponent.defaultProps = {
  color: '#f8e825'
}

export default RatingComponent

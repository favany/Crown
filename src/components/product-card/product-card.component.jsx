import React from 'react';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;

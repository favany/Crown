import React, { useContext } from 'react';

import { CategoriesContext } from '../../contexts/products.context';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Shop;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-preview-container">
          <h2>
            <Link className="title" to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
          <div className="preview">
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPreview;

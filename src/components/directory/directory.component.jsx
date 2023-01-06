import React from 'react';

import './directory.styles.scss';

import CategoryItem from '../category-item/category-item.component.jsx';

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;

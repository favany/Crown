import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { fetchCategoriesAsync } from '../../store/categories/category.action';

import './shop.styles.scss';

const getCategoriesMap = async () => {
  const categoriesArray = await getCategoriesAndDocuments();
  console.log('categoriesArray', categoriesArray);
  return categoriesArray;
};

const Shop = () => {
  const dispatch = useDispatch();

  // backup if error
  // useEffect(() => {
  //   getCategoriesMap().then((categoryArray) => {
  //     dispatch(setCategories(categoryArray));
  //   });
  // }, []);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// The shop page component can actually be the one that matches the code from our categories context, which is to fetch the Firebase API, get down all those documents, create the categories map.

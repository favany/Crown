// import React, { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// // import SHOP_DATA from '../shop-data.js';

// const localCategory = {
//   hats: [
//     {
//       name: 'Brown Brim',
//       price: 25,
//       imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//       id: 1,
//     },
//     {
//       imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//       price: 18,
//       id: 2,
//       name: 'Blue Beanie',
//     },
//     {
//       id: 3,
//       name: 'Brown Cowboy',
//       price: 35,
//       imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
//     },
//     {
//       name: 'Grey Brim',
//       id: 4,
//       imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
//       price: 25,
//     },
//     {
//       price: 18,
//       imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//       name: 'Green Beanie',
//       id: 5,
//     },
//     {
//       name: 'Palm Tree Cap',
//       price: 14,
//       id: 6,
//       imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//     },
//     {
//       price: 18,
//       id: 7,
//       imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
//       name: 'Red Beanie',
//     },
//     {
//       imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
//       name: 'Wolf Cap',
//       id: 8,
//       price: 14,
//     },
//     {
//       id: 9,
//       price: 16,
//       name: 'Blue Snapback',
//       imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
//     },
//   ],
//   jackets: [
//     {
//       name: 'Black Jean Shearling',
//       imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
//       id: 18,
//       price: 125,
//     },
//     {
//       name: 'Blue Jean Jacket',
//       price: 90,
//       id: 19,
//       imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
//     },
//     {
//       name: 'Grey Jean Jacket',
//       imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
//       id: 20,
//       price: 90,
//     },
//     {
//       imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
//       price: 165,
//       name: 'Brown Shearling',
//       id: 21,
//     },
//     {
//       price: 185,
//       name: 'Tan Trench',
//       imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
//       id: 22,
//     },
//   ],
//   mens: [
//     {
//       id: 30,
//       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//       price: 325,
//       name: 'Camo Down Vest',
//     },
//     {
//       name: 'Floral T-shirt',
//       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//       id: 31,
//       price: 20,
//     },
//     {
//       id: 32,
//       price: 25,
//       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
//       name: 'Black & White Longsleeve',
//     },
//     {
//       id: 33,
//       name: 'Pink T-shirt',
//       price: 25,
//       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
//     },
//     {
//       price: 40,
//       name: 'Jean Long Sleeve',
//       id: 34,
//       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
//     },
//     {
//       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
//       name: 'Burgundy T-shirt',
//       id: 35,
//       price: 25,
//     },
//   ],
//   sneakers: [
//     {
//       imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
//       price: 220,
//       name: 'Adidas NMD',
//       id: 10,
//     },
//     {
//       id: 11,
//       name: 'Adidas Yeezy',
//       price: 280,
//       imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
//     },
//     {
//       imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
//       id: 12,
//       price: 110,
//       name: 'Black Converse',
//     },
//     {
//       price: 160,
//       id: 13,
//       name: 'Nike White AirForce',
//       imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//     },
//     {
//       imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
//       price: 160,
//       name: 'Nike Red High Tops',
//       id: 14,
//     },
//     {
//       price: 160,
//       id: 15,
//       imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
//       name: 'Nike Brown High Tops',
//     },
//     {
//       imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
//       name: 'Air Jordan Limited',
//       id: 16,
//       price: 190,
//     },
//     {
//       price: 200,
//       id: 17,
//       name: 'Timberlands',
//       imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
//     },
//   ],
//   womens: [
//     {
//       price: 25,
//       imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
//       id: 23,
//       name: 'Blue Tanktop',
//     },
//     {
//       id: 24,
//       name: 'Floral Blouse',
//       imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
//       price: 20,
//     },
//     {
//       imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
//       price: 80,
//       id: 25,
//       name: 'Floral Dress',
//     },
//     {
//       id: 26,
//       price: 80,
//       imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
//       name: 'Red Dots Dress',
//     },
//     {
//       price: 45,
//       imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
//       name: 'Striped Sweater',
//       id: 27,
//     },
//     {
//       name: 'Yellow Track Suit',
//       id: 28,
//       price: 135,
//       imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
//     },
//     {
//       id: 29,
//       price: 20,
//       imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
//       name: 'White Blouse',
//     },
//   ],
// };

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState(localCategory);

//   // useEffect(() => {
//   //   addCollectionAndDocuments('categories', SHOP_DATA);
//   // }, []);

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       console.log(categoryMap);
//     };
//     try {
//       getCategoriesMap();
//     } catch (e) {
//       console.log(e);
//     }
//   }, []);

//   return (
//     <CategoriesContext.Provider value={{ categoriesMap }}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };

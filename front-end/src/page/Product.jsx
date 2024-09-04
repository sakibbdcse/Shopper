import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from './../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/Breadcrums';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProduct from '../components/relatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = all_product.find((e) => e.id === Number(productId));
    setProduct(foundProduct);
    setLoading(false);
  }, [all_product, productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;

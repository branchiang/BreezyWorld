import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container= styled.div`
padding: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;


const Products = () => {
  return (
    <div>
      <Title>Featured Products</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
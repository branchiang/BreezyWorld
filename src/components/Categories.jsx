import React from 'react';
import { categories } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 50px 50px;
  margin-bottom: 100px;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-top: 150px;
  font-size: 40px;
  text-align: center;
`;

const Categories = () => {
  return (
    <div>
      <Title>Collections</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
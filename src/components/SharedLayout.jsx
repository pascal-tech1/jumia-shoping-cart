import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styled from '@emotion/styled';

const SharedLayout = () => {
  return (
    <Section>
      <Nav />

      <Outlet />
    </Section>
  );
};

export default SharedLayout;
const Section = styled.section`
  display: grid;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: center;
`;

import styled from '@emotion/styled';
import React from 'react';
import CartContent from './CartContent';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <Wrapper>
      <CartContent />
      <CartSummary />
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  display: flex;

  margin-top: 1rem;
  gap: 1rem;
  width: 956px;
`;

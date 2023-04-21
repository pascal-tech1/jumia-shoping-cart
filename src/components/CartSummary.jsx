import styled from '@emotion/styled';
// import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const { subTotal } = useSelector((store) => store.cartSlice);
  return (
    <Wrapper>
      <h2>Cart Summary</h2>
      <div className='amount'>
        <h3>Subtotal</h3>
        <h2>₦{subTotal.toFixed(2)}</h2>
      </div>
      <button className='checkout'>CHECKOUT ₦ {subTotal}</button>
    </Wrapper>
  );
};

export default CartSummary;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffff;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.12);
  width: max-content;
  height: max-content;
  padding: 10px;
  h2 {
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .amount {
    display: flex;
    border-top: 1px solid #eaeaec;
    padding-top: 8px;
    border-bottom: 1px solid #eaeaec;
    padding-bottom: 8px;
    gap: 4rem;
    justify-content: space-between;
    h2 {
      font-size: 1.1rem;
      font-weight: 500;
    }
    h3 {
      font-weight: 300;
      font-size: 0.9rem;
    }
  }
  button {
    all: unset;
    margin-top: 8px;
    background-color: #f68b1e;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;

    :hover {
      color: #fff;
      background-color: #e07e1b;
    }
  }
`;

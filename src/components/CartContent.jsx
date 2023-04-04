import React from 'react';
import cartItems from '../cartItems';
import styled from '@emotion/styled';
import jumiaExpress from '../assets/jexpress-logo.png';

import { AiOutlineDelete } from 'react-icons/ai';
import { BsFileMinusFill } from 'react-icons/bs';
import { BsFilePlusFill } from 'react-icons/bs';
const CartContent = () => {
  return (
    <Wrapper>
      <div></div>
      <h3>cart (3)</h3>
      {cartItems.map((item) => {
        return (
          <div className='cart' key={item.id}>
            <div className='itemInfo'>
              <div className='left'>
                <img className='itemImg' src={item.img} alt='' />
                <div className='itemDetails'>
                  <h4>{item.title}</h4>
                  <h5>in stock</h5>
                  <img className='expressImg' src={jumiaExpress} alt='' />
                </div>
              </div>
              <div className='right'>
                <h3 className='price'>₦ 139,999</h3>
                <div className='prevPrice'>
                  <strike>₦ 190,000 </strike>

                  <h4>26%</h4>
                </div>
              </div>
            </div>
            <div className='remove'>
              <button className='removeBtn'>
                <AiOutlineDelete />
                Remove
              </button>
              <div className='stepContainer'>
                <BsFileMinusFill />
                <h3>3</h3>
                <BsFilePlusFill />
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default CartContent;

const Wrapper = styled.div`
  background-color: #ffff;
  flex: 1;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.12);
  flex-wrap: wrap;

  .itemImg {
    width: 4.7rem;
  }
  .expressImg {
    width: 7rem;
  }
  .cart {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .itemInfo {
    border-top: 1px solid #eaeaec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
  }
  .left {
    display: flex;
    .itemDetails {
      align-self: center;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
    .prevPrice {
      display: flex;
      column-gap: 8px;
      strike {
        font-weight: 400;
        font-weight: 200;
        font-size: 0.8rem;
      }
      h4 {
        background-color: #fcdbb9;
        font-size: 1rem;
        border-radius: 3px;
        font-weight: 400;
        font-weight: 200;
        font-size: 0.8rem;
        color: #f68b1e;
        padding: 2px 7px;
      }
    }
  }
  .remove {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .removeBtn {
    all: unset;
    text-indent: 8px;
    display: flex;
    column-gap: 3px;
    padding: 4px 5px;
    align-items: center;

    color: #f68b1e;
    :hover {
      background-color: #fcdbb9;

      border-radius: 3px;
    }
  }
  .stepContainer {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
    svg {
      color: #f68b1e;
      background-color: white;
      margin-right: 2px;
      font-size: 2rem;

      :hover {
        color: #fff;
        color: #e07e1b;
      }
    }
  }
`;

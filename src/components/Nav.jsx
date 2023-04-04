import React from 'react';
import Product from './Product';
import About from './About';
import Account from './Account';
import Help from './Help';
import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import jumiaLogo from '../assets/Jumia-Logo.png';
import styled from '@emotion/styled';

import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { RxCaretDown } from 'react-icons/rx';
import { BiHelpCircle } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';

const Nav = () => {
  return (
    <Wrapper>
      <AiOutlineMenu className='hamburger' />
      <img src={jumiaLogo} alt='' />
      <form>
        <AiOutlineSearch className='searchIcon' />
        <input type='text' name='' placeholder='Search products, Brand and Categories' />
        <button type='submit'>submit</button>
      </form>
      <button className='navLInk'>
        <HiOutlineUser className='linkIcon' /> Account <RxCaretDown />
      </button>
      <button className='navLInk'>
        <BiHelpCircle className='linkIcon' /> Help <RxCaretDown />
      </button>
      <div className='Cartcount'>
        <button className='navLInk'>
          <AiOutlineShoppingCart className='linkIcon' /> Cart
        </button>
        <h4>{3}</h4>
      </div>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: #fff;
  height: 72px;
  position: relative;
  display: flex;
  margin-top: 23px;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.12);
  column-gap: 1.3rem;
  position: sticky;
  .hamburger {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  img {
    width: 120px;
  }
  .Cartcount {
    position: relative;
    text-align: center;
  }
  button {
    all: unset;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;

    :hover {
      color: #f68b1e;
    }
    .linkIcon {
      font-size: 1.4rem;
    }
  }
  h4 {
    position: absolute;
    top: -9px;
    left: 10px;
    background-color: #f68b1e;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }

  form {
    display: flex;
    position: relative;
    flex: 1;

    .searchIcon {
      position: absolute;
      top: 8px;
      left: 8px;
      font-size: 1.2rem;
    }
    input {
      padding: 0.5rem 2rem;
      flex: 1;
      margin-right: 8px;
      border: 1px solid #cec5b5;
      border-radius: 5px;
    }
    button {
      all: unset;

      background-color: #f68b1e;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      :hover {
        color: #fff;
        background-color: #e07e1b;
      }
    }
  }
  .Cartcount {
    margin-right: 1rem;
  }
`;

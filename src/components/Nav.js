import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background: sienna;
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    transition-duration: 1s;
    order: 1;
  &:nth-child(1) {
    --rotate: 1deg;
  }
  &:nth-child(2) {
    --rotate: -2.5deg;
  }
  &:hover {
    --rotate: 3deg;
  }}
  a {
    font-size: 4rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }}
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}

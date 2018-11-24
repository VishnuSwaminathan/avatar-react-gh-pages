import React from 'react';
import './NavBar.css';

const Nav = props => (
  <nav>
    <ul>
      <li>
        <a href="/">{props.title}</a>
      </li>

      <li id="rp">{props.responsePrompt}</li>

      <li id="score">Score: {props.score}</li>

      <li id="hiScore">Hi-Score: {props.hiScore}</li>
    </ul>
  </nav>
);

export default Nav;

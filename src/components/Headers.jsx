import React, { Component } from 'react';
import styles from '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <h1 className={styles.header}>
         CSSless
      </h1>
    );
  }
}
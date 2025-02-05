import React from 'react';
import ReactDOM from 'react-dom';
import ProductDisplay from './components/ProductDisplay';
import reactToWebComponent from 'react-to-webcomponent';

const ProductDisplayWC = reactToWebComponent(ProductDisplay, React, ReactDOM);

customElements.define('product-display', ProductDisplayWC);

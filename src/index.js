import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar';
import Sectionfirst from './Component/Sectionfirst';
import Credential from './Component/Credential';
import Sectiontwo from './Component/Sectiontwo';
import Ourproducts from './Component/Ourproducts';
// import { ReactComponent as MySvgFile } from './images/books-icon.svg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar />
    <Credential/>
    <Sectionfirst/>
    <Sectiontwo/>
    <Ourproducts/>
    {/* <MySvgFile/> */}

  </React.StrictMode>
);



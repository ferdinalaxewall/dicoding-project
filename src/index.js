import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

import DivReactElement from './Components/ReactElement';
import LatihanReactElement from './Components/LatihanReactElement';
import LatihanJSXElement from './Components/LatihanJSXElement';
import SayHello from './Components/SayHello';
import InstagramProfile from './Components/InstagramProfile';
import FilterableProductTable from './Components/CompositionalComponents/FilterableProductTable';
import News from './Components/NewsExam/News';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function SayHelloForChildren({ children }) {
  return <p>Hello, {children}!</p>;
}

root.render(
  // LatihanJSXElement
  // LatihanReactElement
  // DivReactElement 
  // <LatihanJSXElement />
  <React.StrictMode>
    {/* <InstagramProfile
      name="Muhamad Ferdinal"
      username="ferdinalaxewall"
      bio="Elegant is not a simple thing"
      isVerified
    />

    <SayHello name="Muhamad Ferdinal" company="UNCAL Digital Technology" /> */}

    {/* <FilterableProductTable /> */}

    <News />

  </React.StrictMode>
);


{/* <ReactFundamental username={"ferdinalaxewall"} userId={"2"} />
<DeclarativeCode /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

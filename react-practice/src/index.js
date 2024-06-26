import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Login } from './Components/login/login';
//import { Signin } from './Components/signin/signin';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as bootstrap from "bootstrap";
//import { HookFrormDemo } from './Components/reacthookform/reacthookform';
//import { HookDemo } from './Components/hook-demo/hook-demo';
//import { CustomDate } from './Components/custom-date/custom-date';
//import { SortDataList } from './Components/sort-data/sort-data';
//import { CarosuelDemo } from './Components/carosuel-demo/carosuel-demo';
import { TitleCase } from './Components/title-case-demo/title-case';
import { DonationspopUp} from './Components/donationsmodal/donationspopup';
import { Login } from './Components/login/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DonationspopUp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

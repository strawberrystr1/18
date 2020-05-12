'use strict';

import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';

import 'es6-promise';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';
import calcalute from './modules/calcalute';
import commandChange from './modules/commandChange';
import slider from './modules/slider';
import tabs from './modules/tabs';
import tooglePopup from './modules/tooglePopup';
import toogleMenu from './modules/toogleMenu';
import countTimer from './modules/countTimer';
sendForm();
calculator(100);
calcalute();
commandChange();
slider();
tabs();
tooglePopup();
toogleMenu();
countTimer('13 may 2020');

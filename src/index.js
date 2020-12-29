import React from 'react';
import { render } from 'react-dom';

import { store } from './store/configure';
import  Root  from './containers/root';


import { configureFakeBackend } from './store/helpers/fake-backend';
configureFakeBackend();


render(
  
  <Root store = { store }/>,
  document.getElementById('root')
);



import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import Amplify  from 'aws-amplify';
import config from './components/aws-exports';

Amplify.configure(config);


ReactDom.render(
    
    <App />,
    
    document.querySelector('#root')
);
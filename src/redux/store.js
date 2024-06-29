import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootRedux from './root-reducer';

const middleware = [logger];


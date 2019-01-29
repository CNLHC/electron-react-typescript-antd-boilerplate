import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

export = {
  history,
  configureStore(initialState: any) {
    return createStore(rootReducer, initialState,enhancer);
  }
};

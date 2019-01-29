import * as React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import QYFramework from "./pages/Framework";

interface IRootType {
  store: any
  history: any
};

export default function Root({ store, history }: IRootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <QYFramework/>
      </ConnectedRouter>
    </Provider>
  );
}

import type { RenderOptions } from '@testing-library/react';
import type { Action, AnyAction, Store } from 'redux';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

function renderWithRedux<A extends Action = AnyAction, S = unknown>(ui: React.ReactElement, store: Store<S, A>, options: RenderOptions) {

  const Wrapper: React.FC<{ children: JSX.Element }> = (props: { children: JSX.Element }) => {
    return (
      <Provider store={store} >
        {props.children}
      </Provider>
    )
  };

  render(ui, { wrapper: Wrapper, ...options });
}

export {
  renderWithRedux
}
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserLoaded } from '../../../../Components/Users/Components/UserLoaded';
import JSON from '../../../../JSONResponse.json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('User Loaded Component', () => {
  it('does not render "Loaded User Info" when user in store is null V2', async () => {
    const store = mockStore({
      user: null,
    });

    render(
      <Provider store={store}>
        <UserLoaded />
      </Provider>
    );
    const holaElement = screen.queryByText('Loaded User Info');
    expect(holaElement).toBeNull();
  });

  it('renders "Loaded User Info" when user in store has a value V2', async () => {
    const store = mockStore({
      user: JSON,
    });

    render(
      <Provider store={store}>
        <UserLoaded />
      </Provider>
    );
    const holaElement = await screen.findByText('Loaded User Info');
    expect(holaElement).toBeInTheDocument();
  });
});

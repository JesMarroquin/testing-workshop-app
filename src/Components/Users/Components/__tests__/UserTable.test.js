import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UserTable } from '../UserTable';
import JSON from '../../../../JSONResponse.json';
import '@testing-library/jest-dom';

// Create a mock store
const mockStore = configureStore([]);

describe('UserTable', () => {
  it('renders the table with correct data', () => {
    // Create a mock store with initial state
    const store = mockStore({
      user: JSON,
    });

    // Render the component with the mock store
    const { getByText, getByRole, getAllByText } = render(
      <Provider store={store}>
        <UserTable />
      </Provider>
    );

    // Check if the rendered table contains the correct data
    expect(getByText('Miss Jennie Nichols')).toBeInTheDocument();
    expect(getByText('jennie.nichols@example.com')).toBeInTheDocument();
    expect(getByText('Mr Daniel Anderson')).toBeInTheDocument();
    expect(getByText('daniel.anderson@example.com')).toBeInTheDocument();

    const elements = getAllByText('United States');

    // Assert the expected outcome
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    const expectedRowCount = 2;
    const tableBody = getByRole('table').querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');
    expect(rows).toHaveLength(expectedRowCount);
  });
});

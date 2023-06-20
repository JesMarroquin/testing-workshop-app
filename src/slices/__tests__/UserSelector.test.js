import { getSelectedData } from '../UserSlice';
import JSON from '../../JSONResponse.json';

describe('getSelectedData', () => {
  it('should return the selected data correctly', () => {
    const state = {
      user: JSON,
    };

    const selectedData = getSelectedData(state);

    expect(selectedData).toEqual([
      {
        name: 'Miss Jennie Nichols',
        email: 'jennie.nichols@example.com',
        age: 30,
        country: 'United States',
      },
      {
        name: 'Mr Daniel Anderson',
        email: 'daniel.anderson@example.com',
        age: 38,
        country: 'United States',
      },
    ]);
  });
});

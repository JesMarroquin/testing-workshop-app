import store from '../store';
import userReducer from '../slices/UserSlice';

describe('Redux Store', () => {
  it('should have the user reducer', () => {
    const { user } = store.getState();

    expect(user).toBeDefined();
    expect(user).toEqual(userReducer(undefined, { type: 'unknown' }));
  });
});



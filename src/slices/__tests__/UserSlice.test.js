import userReducer, { setState } from '../UserSlice';

describe('userSlice', () => {
  describe('reducer', () => {
    it('should set the state correctly', () => {
      const initialState = null;
      const newState = { name: 'John Doe', email: 'john@example.com' };
      const action = setState(newState);

      const nextState = userReducer(initialState, action);

      expect(nextState).toEqual(newState);
    });
  });
});

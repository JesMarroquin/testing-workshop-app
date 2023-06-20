import { createSlice, createSelector } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setState: (state, action) => (state = action.payload),
  },
});

export const { setState } = userSlice.actions;
export default userSlice.reducer;

export const getSelectedData = createSelector(
  (state) => state.user.results,
  (results) =>
    results.map((result) => ({
      name: `${result.name.title} ${result.name.first} ${result.name.last}`,
      email: result.email,
      age: result.dob.age,
      country: result.location.country,
    }))
);

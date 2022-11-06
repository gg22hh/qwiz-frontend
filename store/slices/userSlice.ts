import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  email: string | null;
  id: string | null;
  name?: string | null;
};
type SelectEmail = { userReducer: { email: string | null } };
type SelectName = { userReducer: { name?: string | null } };
type SelectId = { userReducer: { id: string | null } };

const initialState: UserType = {
  email: null,
  name: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.name = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectEmail = (state: SelectEmail) => state.userReducer.email;
export const selectName = (state: SelectName) => state.userReducer.name;
export const selectId = (state: SelectId) => state.userReducer.id;

export default userSlice.reducer;

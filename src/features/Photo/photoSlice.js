const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: 'photos',
  initialState: [],
  addPhoto: (state, action) => {
    state.push(action.payload);
  },
})

const {reducer, actions} = photo;
export const {addPhoto} = actions;
export default reducer;
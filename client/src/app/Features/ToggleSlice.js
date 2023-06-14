import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarWidth: 200,
    visibility: false,
};
const initialUserState = {
    // initial user state, fields to be determined afterwards
    data: null,
    loading: false,
    error: null,
}

const toggleSLice = createSlice({
    name: 'width',
    initialState,
    reducers: {
        // setSidebar width while toggling the sidebar
        toggleSidebarWidth: (state, action) => {
            state.sidebarWidth = action.payload;
        },
        toggleVisibility: (state) => {
            state.visibility = !state.visibility;
        }
    },
});
const currentuserSlice = createSlice({
    name: 'currentUser',
    initialUserState,
    reducers: {
        setUserLoading: (state) => {
      state.loading = true;
    },
    setUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    },
});

export const { setUserLoading, setUserSuccess, setUserError } = currentuserSlice.actions;
export const { toggleSidebarWidth, toggleVisibility } = toggleSLice.actions
export default toggleSLice.reducer;
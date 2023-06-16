import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarWidth: 200,
    visibility: false,
};


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

export const { toggleSidebarWidth, toggleVisibility } = toggleSLice.actions
export default toggleSLice.reducer;
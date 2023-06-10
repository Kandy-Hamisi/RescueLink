import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarWidth: 200,
};

const toggleSLice = createSlice({
    name: 'width',
    initialState,
    reducers: {
        // setSidebar width while toggling the sidebar
        toggleSidebarWidth: (state, action) => {
            state.sidebarWidth = action.payload;
        },
    },
});

export const { toggleSidebarWidth } = toggleSLice.actions
export default toggleSLice.reducer;
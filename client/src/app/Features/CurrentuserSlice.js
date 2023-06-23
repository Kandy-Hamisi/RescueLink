import { createSlice } from "@reduxjs/toolkit";
import { auth, firestore } from "../../firebase/firebase";



const initialUserState = {
    // initial user state, fields to be determined afterwards
    data: null,
    loading: false,
    error: null,
}


const currentuserSlice = createSlice({
    name: 'currentUser',
    initialState: initialUserState,
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

// export const getUser = async (dispatch) => {
//   auth.onAuthStateChanged(async (user) => {
//     dispatch(setUserLoading(true));
//     console.log("Authetication state s changing...");
//     await firestore
//       .collection("users")
//       .doc(user?.uid)
//       .get()
//       .then((doc) => {
//         const data = doc.data();
//         console.log("User context: " + data);
//         dispatch(setUserSuccess(data || undefined));
//         //add check if data is undefined
//         // setIsUserLoading(false);
//       })
//       .catch((error) => {
//         dispatch(setUserError(error.message));
//       });
//   });
// };
// getUser();

export const { setUserLoading, setUserSuccess, setUserError } = currentuserSlice.actions;
export default currentuserSlice.reducer;
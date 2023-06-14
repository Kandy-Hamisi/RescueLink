import { auth, firestore } from "./firebase";
import {
  setUserError,
  setUserLoading,
  setUserSuccess,
} from "../app/Features/ToggleSlice";

function addUser(email, uid, fullname, IDnum, isAdmin) {
  firestore.collection("users").doc(uid).set({
    admin: isAdmin,
    IDnum: IDnum,
    email: email,
    fullname: fullname,
    uid: uid,
  });
}
function getUserDetails(uid) {
  firestore
    .collection("users")
    .doc(uid)
    .get()
    .then((snapshot) => {
      console.log(snapshot.data());
    });
}
const getUser = async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    dispatch(setUserLoading(true));
    console.log("Authetication state s changing...");
    await firestore
      .collection("users")
      .doc(user?.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log("User context: " + data);
        dispatch(setUserSuccess(data || undefined));
        //add check if data is undefined
        // setIsUserLoading(false);
      })
      .catch((error) => {
        dispatch(setUserError(error.message));
      });
  });
};

export { addUser, getUserDetails, getUser };

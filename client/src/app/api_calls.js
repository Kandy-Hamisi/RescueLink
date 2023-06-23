import { auth, firestore } from "../firebase/firebase";
import { setUserError, setUserSuccess } from "./Features/CurrentuserSlice";

export const LoginAction = async(dispatch,{email,password}) => {
    // dispatch(setUserLoading(true));
  // console.log(user)
    console.log('first step')
    try {
        await auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in
            
            var user = userCredential.user;
             firestore.collection("users").doc(user.uid).get().then((doc) => { 
                const data = doc.data();
               console.log(data);
               
                 dispatch(setUserSuccess(data));
                //  dispatch(setUserLoading(false));
               console.log('done')
               return data;
                //save data to storage
            })
          })
    }catch (error) {
        console.log("failed error is: " + error.message);
    }
}
export const logoutAction = async (dispatch) => { 
  auth.signOut().then(() => {
    // Sign-out successful.
    console.log('signout')
    dispatch(setUserSuccess(null));
  }).catch((error) => {
    // An error happened.
    setUserError(error.message);
    console.log("failed error is: " + error.message);
  });

}
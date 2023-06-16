import { auth, firestore } from "../firebase/firebase";
import { setUserSuccess } from "./Features/CurrentuserSlice";

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
                //add check if data is undefine
            })
          })
    }catch (error) {
        console.log("failed error is: " + error.message);
    }
}
import {  firebase,googleProvider} from "../firebase/firebase";



export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider);
    }
}


export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}


export const LogIn =(id) => {
    return {
        type: 'LOG_IN',
        id
    }
}


export const LogOut =() => {
    return {
        type: 'LOG_OUT',
     
    }
}
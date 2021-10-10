import firebase  from "firebase";
const firebaseConfig = {
    apiKey: "Your_API_Key",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
const fire=  firebase.initializeApp(firebaseConfig);
export default fire;
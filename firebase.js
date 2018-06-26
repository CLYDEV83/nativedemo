import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcOng2BoFYrsf6aOVs55UfjK0omvZNf24",
   authDomain: "chat-app-203bf.firebaseapp.com",
   databaseURL: "https://chat-app-203bf.firebaseio.com",
   projectId: "chat-app-203bf",
   storageBucket: "chat-app-203bf.appspot.com",
   messagingSenderId: "1077049543347"

}

firebase.initializeApp(config);

export default firebase;
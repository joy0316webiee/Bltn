import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBk6AnhwkLEX9C-WPO5DcDt_oArVLQJr60",
  authDomain: "bltn-react-chrome-extension.firebaseapp.com",
  databaseURL: "https://bltn-react-chrome-extension.firebaseio.com",
  projectId: "bltn-react-chrome-extension",
  storageBucket: "bltn-react-chrome-extension.appspot.com",
  messagingSenderId: "615813885768"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
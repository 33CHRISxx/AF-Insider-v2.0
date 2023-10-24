import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAJ-F30Rhh-4-QSkXDezu4_jR5yE8ndUZg",
  authDomain: "af-esports-insider.firebaseapp.com",
  projectId: "af-esports-insider",
  storageBucket: "af-esports-insider.appspot.com",
  messagingSenderId: "508963118931",
  appId: "1:508963118931:web:a951c27aafa009dfee0ba6",
  measurementId: "G-D08QT9K51Q"
};
  firebase.initializeApp(firebaseConfig);


  export default firebase;
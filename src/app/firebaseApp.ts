import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.json"

export default initializeApp(firebaseConfig)
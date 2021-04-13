// Allows us to mirror state to firebase db
import Rebase from "re-base";
// And of course firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-WW9ekxDKx1gh0NaTiJXD01iflxYhPH4",
  authDomain: "catch-of-the-day-da9f8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-da9f8-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

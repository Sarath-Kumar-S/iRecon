// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onChildAdded } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBySS6X2hEKHVAhZD3OSpf9UClbBixM1lk",
  authDomain: "i-recon.firebaseapp.com",
  databaseURL: "https://i-recon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "i-recon",
  storageBucket: "i-recon.appspot.com",
  messagingSenderId: "735653036738",
  appId: "1:735653036738:web:7dd592393321d0abc7b15b",
  measurementId: "G-LD1VX4L4W7"
};

const showIt = (data) => {
  console.log(data);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);
const count = ref(database, 'patients/');
// onValue(count, (snapshot) => {
//   const data = snapshot.val();
//   showIt(data);
// });
onChildAdded(count, () => {
  alert("Alert! Your patient needs to be attended to.");
})
// const recentPostsRef = query(ref(database, 'posts'), limitToLast(1));
// console.log(recentPostsRef)
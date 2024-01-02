import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.apiKeyFirebase,
  authDomain: "hackfusion-c831d.firebaseapp.com",
  databaseURL: "https://hackfusion-c831d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackfusion-c831d",
  storageBucket: "hackfusion-c831d.appspot.com",
  messagingSenderId: "131044666281",
  appId: "1:131044666281:web:93d0e2ae6d6432891d72b8",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, set, ref };

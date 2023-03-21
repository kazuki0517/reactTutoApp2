import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDgrtx_eZfqtum77-cBoahDczJsee58_8o",
	authDomain: "blog-a7846.firebaseapp.com",
	projectId: "blog-a7846",
	storageBucket: "blog-a7846.appspot.com",
	messagingSenderId: "521177075182",
	appId: "1:521177075182:web:a722bb0c4f2698904412ff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};

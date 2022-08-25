import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyABeOQbjI6diFtQ6xQspYguHmsOE-aRO5c",
	authDomain: "alux-codestates-3-3458e.firebaseapp.com",
	projectId: "alux-codestates-3-3458e",
	storageBucket: "alux-codestates-3-3458e.appspot.com",
	messagingSenderId: "466657123091",
	appId: "1:466657123091:web:6957ee5cd1bf04714b18e6",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

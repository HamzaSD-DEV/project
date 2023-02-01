import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEUEHiApajlhWDSchwHe07fQg7Ms44ozQ",
    authDomain: "hamza-2dee5.firebaseapp.com",
    projectId: "hamza-2dee5",
    storageBucket: "hamza-2dee5.appspot.com",
    messagingSenderId: "545637825676",
    appId: "1:545637825676:web:2524a1d0e1af919183cfa9",
    measurementId: "G-02PKFQ4QWW"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase

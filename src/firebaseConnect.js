import  firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCObjUQGvHN_9bVEB_YbzngXt72Rvjcvrs",
  authDomain: "notereact2401.firebaseapp.com",
  databaseURL: "https://notereact2401-default-rtdb.firebaseio.com",
  projectId: "notereact2401",
  storageBucket: "notereact2401.appspot.com",
  messagingSenderId: "372557864024",
  appId: "1:372557864024:web:ab0b1c03076fe574d6fe2d",
  measurementId: "G-YVGJJ4N2VD"
};
  // Initialize Firebase
  //  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

   firebase.initializeApp(firebaseConfig);
   export const noteData = firebase.database().ref('dataForNote');

  //var data = firebase.database().ref('dataForNote');
  // data.once('value').then(function(snapshot){
  //   console.log(snapshot);
  // })
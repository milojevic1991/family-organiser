import FirebaseApp from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const firebaseConfig = {
   apiKey: "AIzaSyDGY7BdCtlm9uXYcnOGO8HAZm8fr0MoaXE",
   authDomain: "family-organiser.firebaseapp.com",
   databaseURL: "https://family-organiser.firebaseio.com",
   projectId: "family-organiser",
   storageBucket: "family-organiser.appspot.com",
   messagingSenderId: "252532108933",
   appId: "1:252532108933:web:849ff0e0357d5a4e1f03ec",
   measurementId: "G-4ZTR7L0GWX"
}


class Firebase {
   constructor(){
      FirebaseApp.initializeApp(firebaseConfig)
      this.auth = FirebaseApp.auth();
      this.db = FirebaseApp.firestore();

   }

   login(email,password){
      return this.auth.signInWithEmailAndPassword(email,password);
   }

   async register (email,password,firstName,lastName){
      await this.auth.createUserWithEmailAndPassword(email,password);

      return this.auth.currentUser.updateProfile({
         displayName:firstName + lastName
      })
   }

   logout(){
       return this.auth.signOut();
   }

}


export default new Firebase();
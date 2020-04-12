
import * as actionsType from './actionsType';
import firebase from '../../config/firebase';


export const registerSubmit = (email,pass) => {
   return dispatch =>{
      dispatch(registerStart());

      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((res) => {

         dispatch(registerSuccess(res));
      })
      .catch(err=>{
         dispatch(registerError(err));
      })


   }
};

export const registerStart= () => {
   return{
      type: actionsType.REGISTER_FORM_START
   }
   
}


export const registerSuccess= (success) => {
   return{
      type: actionsType.REGISTER_FORM_SUCCESS,
      payload:success
   }
}



export const registerError= (err) => {
   return{
      type: actionsType.REGISTER_FORM_ERROR,
      payload: err
   }
}

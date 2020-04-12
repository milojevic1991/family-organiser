
import * as actionsType from './actionsType';
import firebase from '../../config/firebase';

export const loginSubmit = (email,pass) => {
   return dispatch =>{
      dispatch(loginStart());

       firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(res=>{
         dispatch(loginSuccess(res));
      })
      .catch(err=>{
         dispatch(loginError(err));
      })
   }
};

export const loginStart= () => {
   return{
      type:actionsType.LOGIN_FORM_START
   }
   
}


export const loginSuccess= (success) => {
   return{
      type:actionsType.LOGIN_FORM_SUCCESS,
      payload:success
   }
   
}

export const loginError= (err) => {
   return{
      type:actionsType.LOGIN_FORM_ERROR,
      payload:err
   }
   
}

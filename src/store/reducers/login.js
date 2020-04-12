import * as actionsType from '../actions/actionsType';

const initialState = {
   loading:false,
   success:null,
   error:null,
   toLog:false
}

const login = (state = initialState, action) => {

switch (action.type) {
   case actionsType.LOGIN_FORM_SUBMIT:
      
      console.log('LOGIN FORMA PREKO REDUCERA');
      return{
         ...state
      }

      case actionsType.LOGIN_FORM_START:
      
         console.log('pocetak forme i LOGIN,pocinje proces');
   
         return{
            ...state,
            loading:true
         }

         case actionsType.LOGIN_FORM_SUCCESS:
      
            console.log('PROSLA FORMA,success');
      
            return{
               ...state,
               loading:false,
               success:action.payload,
               toLog:true
            }
   

            case actionsType.LOGIN_FORM_ERROR:
      
               console.log('ERROR FORMA');
         
               return{
                  ...state,
                  loading:false,
                  error:action.payload,

               }
      

   



   default:
    return state;
}
   
}

export default login;
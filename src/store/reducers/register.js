import * as actionsType from '../actions/actionsType';

const initialState = {
   loading:false,
   success:null,
   error:null

}

const register = (state = initialState, action) => {

switch (action.type) {
   case actionsType.REGISTER_FORM_SUBMIT:

   console.log('klik na register');
   return{
      ...state,
      loading:true
   }
    
   case actionsType.REGISTER_FORM_START:

      console.log('pocetak forme i register,pocinje proces');
      return{
         ...state,
         loading:true
      }

      case actionsType.REGISTER_FORM_SUCCESS:

         console.log('PROSLA FORMA,success');
         return{
            ...state,
            loading:false,
            success:action.payload,
            error:null
         }

         case actionsType.REGISTER_FORM_ERROR:

            console.log('ERROR FORMA');
            return{
               ...state,
               loading:false,
               error:action.payload
            }
              
           
        

   default:
    return state;
}
   
}

export default register;
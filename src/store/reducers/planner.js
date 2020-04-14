import * as actionsType from '../actions/actionsType';

const initialState = {
   loading:false,
   plannerItem:null,
   plannerItemFetch:null

}


const planner = (state=initialState, action) => {

   switch (action.type) {
      case actionsType.PLANNER_FORM_SUBMIT:
         
         console.log('akcija planner');
      
   

         case actionsType.PLANNER_FORM_START:
         
            console.log('start planner');
            return{
               ...state,
               loading:true
            }
         
            case actionsType.PLANNER_FORM_SUCCESS:
         
               console.log('SUCCESS planner');
               return{
                  ...state,
                  loading:false,
                  plannerItem:action.payload

               }


               case actionsType.PLANNER_FORM_ERROR:
         
                  console.log('ERROR planner');
                  return{
                     ...state,
                     loading:false,
                     plannerItem:action.payload
   
                  }


                  
               case actionsType.PLANNER_FORM_FETCH_DATA_SUCCESS:
         
                  console.log('FETCH DATA ',action.payload);

                  const updatedRes = action.payload.map(el=>{
                     return el['name'];
                  })
                  return{
                     ...state,
                     loading:false,
                     plannerItemFetch:updatedRes
   
                  }

                  case actionsType.PLANNER_FORM_FETCH_DATA_ERROR:
         
                     console.log('FETCH DATA ERROR ',action.payload);
                     return{
                        ...state,
                        loading:false,
                        plannerItemFetch:action.payload
      
                     }
               
               
            
      
      


      default:
         return state;
   }
   
}

export default planner;
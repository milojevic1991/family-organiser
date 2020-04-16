import React from 'react';
import * as actionType from '../actions/actionsType';
import axios from '../../axios-firebase';


export const plannerSubmit =  (data) => {
   return async dispatch =>{

      dispatch(plannerStart());

      let res = await axios.post("/plannerTasks.json",data).catch((err) => {

         console.log('greska actions');
         dispatch(plannerError(err))
      })

      console.log('res',res);
      
      dispatch(plannerSuccess(res))
      
   }
   
};

export const plannerStart = () => {
  return{

     type:actionType.PLANNER_FORM_START
  }
   
} 

export const plannerSuccess = (dataRes) => {
   return{
   type:actionType.PLANNER_FORM_SUCCESS,
   payload:dataRes
   }
} 

export const plannerError = (err) => {
   return{
   type:actionType.PLANNER_FORM_ERROR,
   payload:err
   }
} 

export const plannerFetchData = () =>{
   return async dispatch =>{

      const res = await axios.get('/plannerTasks.json').catch(err=>{
         dispatch(plannerFetchDataError(err));
      })

      if(res.data){
         
         console.log('fetch data',Object.values(res.data));
         dispatch(plannerFetchDataSuccess(Object.values(res.data)));
      }
   }

}

export const plannerFetchDataSuccess = (dataRes) => {
   return{
         type:actionType.PLANNER_FORM_FETCH_DATA_SUCCESS,
         payload:dataRes
   }
}

export const plannerFetchDataError = (err) => {
   return{
      type:actionType.PLANNER_FORM_FETCH_DATA_ERROR,
      payload:err
   }
}
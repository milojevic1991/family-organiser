import React ,{useEffect, useCallback}from "react";
import {useSelector,useDispatch} from 'react-redux';
import { List, Typography, Divider, Button, Tooltip, Col,Spin } from "antd";

import * as actions from '../../../store/actions/planner';
import axios from '../../../axios-firebase';

const PlannerItem = ({sumbitPlanner}) => {
  // const data2 = [
  //   "Racing car sprays burning fuel into crowd.",
  //   "Japanese princess to wed commoner.",
  //   "Australian walks 100km after outback crash.",
  //   "Man charged over missing wedding girl.",
  //   "Los Angeles battles huge wildfires.",
  // ];
  const data = useSelector(state => state.planner.plannerItemFetch);
  const dispatch = useDispatch();

  
  console.log('STATE U PLANER KOMPONENTI',data);

    
  const plannerRemoveHandler =useCallback((e) => {
    
          console.log(e);
    
  },[])

  useEffect(() => {
  
    console.log('use efect proba');
  },[data])




// Komponenta se renderuje, ali fetchuje prazan store, i zato dolazi do greske. Ubaci loader i resices sve.
  return (
    <div>
      {data ? 
      <List
      style={{textAlign:'left'}}
        size="large"
        bordered
        dataSource={data }
        renderItem={(item) => (
          <List.Item
          style={{borderBottom:'1px solid #e6e6e6',padding:'2rem'}}
            actions={[
              <Button
              size='small'
              shape='rounded'
                type="danger"
                onClick={() => plannerRemoveHandler(item)}
              >
                X
              </Button>,
            ]}
          >
            <Tooltip title="Remove Todo"></Tooltip>
            {item}
          </List.Item>
        )}
      /> 
      
      : <Spin  
      style={{marginTop:'30px'}}
      size="large" 
      tip="Loading..."
       />
    }
    
    </div>
  );
};

export default PlannerItem;

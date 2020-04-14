import React ,{useEffect}from "react";
import {useSelector,useDispatch} from 'react-redux';
import { List, Typography, Divider, Button, Tooltip, Col } from "antd";

import * as actions from '../../../store/actions/planner';
import axios from '../../../axios-firebase';

const PlannerItem = () => {
  const data2 = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const dispatch = useDispatch();

  const data = useSelector(state => state.planner.plannerItemFetch);
  console.log('STATE U PLANER KOMPONENTI',data);
  console.log('STATE U PLANER KOMPONENTI DATA',data2);
  useEffect(() => {

    dispatch(actions.plannerFetchData());
    //  axios.get('/plannerTasks.json')
    //  .then(res=>{
    //    console.log('DATAAAA',Object.values(res.data));
    //  })
    
  },[])

// Komponenta se renderuje, ali fetchuje prazan store, i zato dolazi do greske. Ubaci loader i resices sve.
  return (
    <div>
      <List
      style={{textAlign:'left'}}
        size="large"
        bordered
        dataSource={data ? data : data2 }
        renderItem={(item) => (
          <List.Item
          style={{borderBottom:'1px solid #e6e6e6',padding:'2rem'}}
            actions={[
              <Button
              size='small'
              shape='rounded'
                type="danger"
                // onClick={() => onTodoRemoval(todo)}
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
    </div>
  );
};

export default PlannerItem;

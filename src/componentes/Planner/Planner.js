import React ,{useEffect, useCallback}from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import PlannerItem from "./PlannerItem/PlannerItem";

import axios from "../../axios-firebase";
import * as actions from "../../store/actions/planner";
const Planner = () => {

  const dispatch = useDispatch();


  const onFinish =  (value) => {
    
    dispatch(actions.plannerSubmit(value))
  
      console.log('on FINISH');

  };
 
  useEffect(() => {
  
    dispatch(actions.plannerFetchData());
    console.log('use efect proba');
  },[dispatch,onFinish])
  
  
 

  return (
    <div>
      <Form
        name="Planner"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="What's next?"
          name="name"
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          {/* <PlusCircleFilled /> */}
          Add todo
        </Button>
      </Form>

      <PlannerItem
      sumbitPlanner = { onFinish}
      />
    </div>
  );
};

export default Planner;

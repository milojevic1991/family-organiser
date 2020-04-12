import React, { useState,useCallback } from "react";
import { useHistory } from "react-router-dom";
//React Hook
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/register';

import { Form, Input, Button, Icon ,Spin ,Alert} from "antd";

import firebase from "../../config/firebase";

const Register = () => {

  const [registerUser, setRegisterUser] = useState();
  const history = useHistory();

  const registerState = useSelector(state =>state.register)
  console.log('registerState',registerState);

  const dispatch = useDispatch();


  const onFinish = (values) => {

    // dispatch(actions.registerSubmit());

    dispatch(actions.registerSubmit(values.email,values.password));
    // setRegisterUser(values);
    // firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    // .then((res) => {
    //   console.log('res',res);

      
    // })
    // .catch((err) => {
    //   console.log('err',err);
      
    // })
    // history.push("/");
  };

  // const onRegister = async (email, pass) => {
  //   firebase.register(email, pass);
  // };

  
  return (
    <div>
      <Form
        name="Register Form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 5, message: "Password' must be at least 6 characters", validateTrigger: "onBlur" },
         
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="name" label="First name" rules={[{ required: false }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last name"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
        {registerState.error ? <Alert message={registerState.error.message } type="error" /> : null }
        {registerState.loading ? <Spin /> : null }
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

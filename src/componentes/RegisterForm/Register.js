import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Icon } from "antd";

import firebase from '../../config/firebase';

const Register = () => {

   const [stateTest,setStateTest] = useState({});
   const history = useHistory();


  const onFinish = (values) => {
     setStateTest(values);
     console.log("Success register:", stateTest);
     onRegister();
  };

  const onRegister = async() => {
     firebase.register('nemanja','mil','cao','zdarav');
  }

  
  return (
    <div>
      <Form
        name="Register Form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item   name="firstName" label="First name" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

      <Form.Item   name="lastName" label="Last name" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

        <Button type="primary" 
        htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

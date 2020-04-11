import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Icon } from "antd";
import { Typography } from 'antd';
import classes from "./Login.module.css";
import firebase from '../../config/firebase';

const { Text } = Typography;

const Login = () => {

const [errState, errSet] = useState('');
   const history = useHistory();


  const onFinish = (values) => {
    console.log("Success:", values);
    firebase.login(values.email,values.password)
    .then((response) => {
      console.log('response',response);
      history.push('/');
    })
    .catch((err) => {
      errSet(err);
      console.log('err',err);
      
    })
  
  };

  const validateMessages = {
    required: "'${name}' is required!",
    // ...
  };
  return (
    <div className={classes.loginFormWrapp}>
      <Form
      validateMessages={validateMessages}

        name="Login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Please input your email!"  }]}
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
        {errState ? <Text type="danger">{errState.message}</Text> : null }
        
        <Button type="primary" 
        htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

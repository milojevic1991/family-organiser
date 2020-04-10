import React from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Icon } from "antd";
import classes from "./Login.module.css";

const Login = () => {

   const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className={classes.loginFormWrapp}>
      <Form
        name="Login Form"
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


        <Button type="primary" 
        htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

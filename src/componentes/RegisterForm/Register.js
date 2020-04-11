import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Icon } from "antd";

import firebase from "../../config/firebase";

const Register = () => {
  const [registerUser, setRegisterUser] = useState();
  const history = useHistory();


  const onFinish = (values) => {
    setRegisterUser(values);
    onRegister(values.email, values.password);
    history.push("/");
  };

  const onRegister = async (email, pass) => {
    firebase.register(email, pass);
  };

  
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

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

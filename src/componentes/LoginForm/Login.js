import React,{useEffect} from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Icon ,Spin ,Alert} from "antd";
import { Typography } from 'antd';
import classes from "./Login.module.css";
import firebase from '../../config/firebase';


//Redux Hooks
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/login';

const { Text } = Typography;


const Login = () => {

  const dispatch = useDispatch();
  const loginState = useSelector(state =>state.login)

// const [errState, errSet] = useState('');
   const history = useHistory();

   useEffect(() => {
     console.log('u use efectu sam',loginState);
     if(loginState.toLog) {
       // history.push('/');
       console.log('u use efectu sam i prosam sam',loginState);
    } 
      
   },[loginState])


  const onFinish =   (values) => {
    
    console.log('loginState na klik',loginState);
     dispatch(actions.loginSubmit(values.email,values.password));

     console.log('loginState ispod dispatcha da vidimo sta se desava',loginState);
    
   

  
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
        {loginState.error ? <Alert message={loginState.error.message } type="error" /> : null }
        {loginState.loading ? <Spin /> : null }
        <Button type="primary" 
        htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

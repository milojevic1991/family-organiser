import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PlannerItem from './PlannerItem/PlannerItem';

const Planner = () => {
   return (
      <div>
         <Form
      name="Planner"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
            <Form.Item
        label="What's next?"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
            {/* <PlusCircleFilled /> */}
            Add todo
          </Button>

    </Form>

    <PlannerItem/>
      </div>
   );
};

export default Planner;
import React from 'react';
import { List, Typography, Divider ,Button,Tooltip,Col } from 'antd';

const PlannerItem = () => {
  
   const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];
   return (
      <div>

           <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>
         
         <Tooltip title="Remove Todo">
          <Button
            // className="remove-todo-button"
            type="danger"
            // onClick={() => onTodoRemoval(todo)}
          >
            X
          </Button>
        </Tooltip>
         {item}</List.Item>}
    />
      </div>
   );
};

export default PlannerItem;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { actionForAddUpdateToDo } from "../services/redux/todo/action";

const { Item } = Form;

export default function CreateTodo({
  form,
  addUpdatelabel,
  setAddUpdateLabel,
}) {
  const dispatch = useDispatch();

  const { todoListsLoading, todoAddSuccess } = useSelector(
    (state) => state.todoReducer
  );

  const onFinishCreateTodo = (values) => {
    console.log(values);
    const apiData = {
      ...values,
      id: addUpdatelabel.id ? addUpdatelabel.id : uuidv4(),
    };
    dispatch(
      actionForAddUpdateToDo(
        apiData,
        addUpdatelabel.label,
        addUpdatelabel.todoType
      )
    );
    form.resetFields();
    setAddUpdateLabel({
      label: "Submit",
      id: "",
      toDoType: "",
    });
  };

  return (
    <Form onFinish={onFinishCreateTodo} form={form}>
      <div className="todo-form">
        <Item label="Todo Name" name="label" rules={[{ required: true }]}>
          <Input
            placeholder="Enter Task Name"
            allowClear
            className="c-t-input-field"
          />
        </Item>
        <Button
          htmlType="submit"
          className="t-d-submit-b"
          loading={todoListsLoading}
        >
          {addUpdatelabel.label}
        </Button>
      </div>
    </Form>
  );
}

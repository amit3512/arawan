import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Form, Row, Typography } from "antd";
import ToDoLists from "../components/todos";
import CompletedToDoLists from "../components/completeTodos";
import CreateTodo from "../components/createTodo";
import {
  actionForDeleteToDo,
  actionForMarkAsComplete,
} from "../services/redux/todo/action";

const { Title } = Typography;

export default function ToDoListDetails() {
  const { todoLists, completedTodoLists } = useSelector(
    (state) => state.todoReducer
  );
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [addUpdatelabel, setAddUpdateLabel] = useState({
    label: "Submit",
    id: "",
    todoType: "",
  });

  const handleMarkAsComplete = (data, type) => {
    dispatch(actionForMarkAsComplete(data, type));
  };

  const handleEdit = (data, type) => {
    form.setFieldsValue({
      label: data.label,
    });
    setAddUpdateLabel({
      label: "Update Todo",
      id: data.id,
      todoType: type,
    });
    // dispatch(actionForMarkAsComplete(data));
  };

  const handleDelete = (id, type) => {
    dispatch(actionForDeleteToDo(id, type));
  };
  return (
    <>
      <Title className="t-t-c"> To-Do List Application</Title>
      <CreateTodo
        form={form}
        addUpdatelabel={addUpdatelabel}
        setAddUpdateLabel={setAddUpdateLabel}
      />
      <Row>
        <Col offset={1} xs={21} sm={21} lg={11}>
          <ToDoLists
            handleMarkAsComplete={handleMarkAsComplete}
            todoLists={todoLists}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Col>

        <Col offset={1} xs={21} sm={21} lg={11}>
          <CompletedToDoLists
            handleMarkAsComplete={handleMarkAsComplete}
            todoLists={completedTodoLists}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </>
  );
}

import { Card, Col, Divider, Row, Typography } from "antd";
import ToDoLists from "../components/todos";
import CompletedToDoLists from "../components/completeTodos";
import { useState } from "react";

const { Title } = Typography;

const todoLists = [
  {
    id: 1,
    label: "Todo1",
  },
  {
    id: 2,
    label: "Todo2",
  },
];

export default function ToDoListDetails() {
  const [dataFiltered, setFilteredData] = useState(todoLists);
  const [dataComplete, setCompleteData] = useState([]);
  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
    const dataC = dataFiltered.filter((todo) => {
      return todo.id === id;
    });
    const dataF = dataFiltered.filter((todo) => {
      return todo.id !== id;
    });
    setCompleteData([...dataC, ...dataComplete]);
    setFilteredData(dataF);
  };

  const handleDelete = (id, type) => {
    console.log(`Delete item with ID ${id}`);
    const dataManipulate = type === "incomplete" ? dataFiltered : dataComplete;
    const data = dataManipulate.filter((todo) => {
      return todo.id !== id;
    });
    if (type === "incomplete") {
      setFilteredData(data);
    } else {
      setCompleteData(data);
    }
  };
  return (
    <>
      <Title className="t-t-c"> To-Do List Application</Title>
      <Card>
        <Row>
          <Col offset={1} xs={21} sm={21} lg={11}>
            <ToDoLists
              todoLists={dataFiltered}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </Col>
          <Col offset={1} xs={21} sm={21} lg={11}>
            <CompletedToDoLists
              todoLists={dataComplete}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

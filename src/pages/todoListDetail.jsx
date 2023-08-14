import { Card, Col, Divider, Row, Typography } from "antd";
import ToDoLists from "../components/todolist";
import CompletedToDoLists from "../components/completeTodos";

const { Title } = Typography;

export default function ToDoListDetails() {
  return (
    <>
      <Title className="t-t-c"> To-Do List Application</Title>
      <Card>
        <Row>
          <Col offset={1} xs={21} sm={21} lg={11}>
            <ToDoLists />
          </Col>
          <Col offset={1} xs={21} sm={21} lg={11}>
            <CompletedToDoLists />
          </Col>
        </Row>
      </Card>
    </>
  );
}

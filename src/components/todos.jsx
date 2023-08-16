import { Button, List, Typography } from "antd";
import Lists from "./listTodos";

const { Text } = Typography;

export default function ToDoLists(props) {
  const { todoLists, handleEdit, handleDelete, handleMarkAsComplete } = props;

  return (
    <>
      <div className="t-d-l-t">
        <Text>Active To-Do Lists</Text>
      </div>

      <Lists
        todoLists={todoLists}
        handleMarkAsComplete={handleMarkAsComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        type="incomplete"
      />
    </>
  );
}

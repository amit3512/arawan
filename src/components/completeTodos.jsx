import { Button, List, Typography } from "antd";
import Lists from "./listTodos";

const { Text } = Typography;

// const todoLists = [
//   {
//     id: 1,
//     label: "Todo1",
//   },
//   {
//     id: 2,
//     label: "Todo2",
//   },
// ];

export default function CompletedToDoLists(props) {
  const { todoLists, handleEdit, handleDelete, handleMarkAsComplete } = props;

  return (
    <>
      <div className="t-d-l-t">
        <Text> Completed To-Do Lists</Text>
      </div>

      <Lists
        todoLists={todoLists}
        handleMarkAsComplete={handleMarkAsComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        type="complete"
      />
    </>
  );
}

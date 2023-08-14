import { Button, List, Typography } from "antd";
import Lists from "./listTodos";

const { Text } = Typography;

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

export default function CompletedToDoLists(props) {
  const { todoLists, handleEdit, handleDelete } = props;

  return (
    <>
      <Text className="t-d-l-t"> Completed To-Do Lists</Text>

      <Lists
        todoLists={todoLists}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        type="complete"
      />
    </>
  );
}

import { useState } from "react";
import { Button, List, Typography } from "antd";
import Lists from "./listTodos";

const { Text } = Typography;

export default function ToDoLists(props) {
  const { todoLists, handleEdit, handleDelete } = props;

  return (
    <>
      <Text className="t-d-l-t"> To-Do Lists</Text>

      <Lists
        todoLists={todoLists}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        type="incomplete"
      />
    </>
  );
}

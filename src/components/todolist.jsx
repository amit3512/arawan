import { useState } from "react";
import { Button, List, Typography } from "antd";

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

export default function ToDoLists() {
  const [dataFiltered, setFilteredData] = useState(todoLists);
  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID ${id}`);
    const data = dataFiltered.filter((todo) => {
      return todo.id !== id;
    });
    setFilteredData(data);
  };

  return (
    <>
      <Text className="t-d-l-t"> To-Do Lists</Text>

      <List
        dataSource={dataFiltered}
        renderItem={(item, idx) => (
          <List.Item>
            <div className="t-d-l">
              {idx + 1}. {item.label}
              <div>
                <Button
                  className="t-d-l-b complete"
                  onClick={() => handleEdit(item.id)}
                >
                  Mark as Complete
                </Button>
                <Button
                  type="primary"
                  className="t-d-l-b edit"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </Button>
                <Button
                  className="t-d-l-b delete"
                  danger
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
}

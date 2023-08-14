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

export default function CompletedToDoLists() {
  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID ${id}`);
  };
  return (
    <>
      <Text className="t-d-l-t"> Completed To-Do Lists</Text>

      <List
        dataSource={todoLists}
        renderItem={(item, idx) => (
          <List.Item>
            <div className="t-d-l">
              {idx + 1}. {item.label}
              <div>
                <Button
                  className="t-d-l-b undo"
                  onClick={() => handleEdit(item.id)}
                >
                  Undo
                </Button>

                <Button
                  type="primary"
                  className="t-d-l-b edit"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </Button>

                <Button
                  danger
                  className="t-d-l-b delete"
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

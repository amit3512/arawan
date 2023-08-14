import { Button, List } from "antd";

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
  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID ${id}`);
  };
  return (
    <>
      <List
        dataSource={todoLists}
        renderItem={(item, idx) => (
          <List.Item>
            <div className="t-d-l">
              {idx + 1}. {item.label}
              <div>
                <Button type="primary" onClick={() => handleEdit(item.id)}>
                  Mark as Complete
                </Button>

                <Button
                  type="primary"
                  className="t-d-l-b"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </Button>

                <Button danger onClick={() => handleDelete(item.id)}>
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

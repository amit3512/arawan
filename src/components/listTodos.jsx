import { Button, List } from "antd";

export default function Lists(props) {
  const { todoLists, handleEdit, handleDelete, type } = props;

  return (
    <>
      <List
        dataSource={todoLists}
        renderItem={(item, idx) => (
          <List.Item>
            <div className="t-d-l">
              {idx + 1}. {item.label}
              <div>
                <Button
                  className={`t-d-l-b ${type}`}
                  onClick={() => handleEdit(item.id)}
                >
                  {type === "complete" ? "Undo" : "Mark as Complete"}
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
                  onClick={() => handleDelete(item.id, type)}
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

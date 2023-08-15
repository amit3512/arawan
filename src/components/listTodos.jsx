import { Button, List, Tooltip } from "antd";

export default function Lists(props) {
  const { todoLists, handleEdit, handleDelete, handleMarkAsComplete, type } =
    props;

  return (
    <>
      <List
        dataSource={todoLists}
        renderItem={(item, idx) => (
          <List.Item>
            <div className="t-d-l">
              <Tooltip title={item.label}>
                <div className="t-d-label">
                  {idx + 1}. {item.label}
                </div>
              </Tooltip>

              <div>
                <Button
                  className={`t-d-l-b ${type}`}
                  onClick={() => handleMarkAsComplete(item, type)}
                >
                  {type === "complete" ? "Undo" : "Mark as Complete"}
                </Button>
                <Button
                  type="primary"
                  className="t-d-l-b edit"
                  onClick={() => handleEdit(item, type)}
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

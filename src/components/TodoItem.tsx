import { Paper, Typography, Checkbox, Button, Stack } from "@mui/material";
import type { TodoItemType } from "../vite-env";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"])=> void;
  deleteHandler: (id: TodoItemType["id"])=> void;
  editHandler: (id: TodoItemType["id"])=> void;
};

const TodoItem = ({ todo, completeHandler, deleteHandler, editHandler }: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox checked={todo.isCompleted} onChange={()=> completeHandler(todo.id)}/>
        <Button onClick={()=> deleteHandler(todo.id)}>Delete</Button>
        <Button onClick={editHandler}>Edit</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;

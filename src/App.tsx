import {
  Container,
  AppBar,
  Toolbar,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import type { TodoItemType } from "./vite-env";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { title: "Web Developement", isCompleted: false, id: "034536" },
    { title: "Hellow World", isCompleted: false, id: "65458" },
  ]);

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    alert(id);
  };
  const deleteHandler = (id: TodoItemType["id"]): void => {
    alert(id);
  };
  const editHandler = (id: TodoItemType["id"]): void => {
    alert(id);
  };

  const submitHandler = () => {};

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"70%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            key={i.id}
            todo={i}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </Stack>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
      />
      <Button
        onClick={submitHandler}
        sx={{ margin: "1rem 0" }}
        fullWidth
        variant="contained"
      >
        Add
      </Button>
    </Container>
  );
};

export default App;

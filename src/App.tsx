import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

const App = () => {
  const {todos, setTodos} = useState<TodoItemType[]>([]);
  return (
    <Container maxWidth= "sm">
      <AppBar position= "static">
        <Toolbar>
          <Typography>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoItem todo={}></TodoItem>
    </Container>
  );
};

export default App;

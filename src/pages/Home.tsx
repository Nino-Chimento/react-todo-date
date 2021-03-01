import React, { FC, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import moment from "moment";
import {
  StyledAllarm,
  StyledButtonAdd,
  StyledButtonTodo,
  StyledComplete,
  StyledDeleteComplete,
  StyledForm,
  StyledText,
  StyledTodo,
  StyledWrap,
  StyledWrapInput,
} from "../Style/Style";
import { Button } from "../components/Button/Button";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  date: string;
  complete: boolean;
}

const Home: FC = () => {
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    //@ts-ignore
    const todos: any = JSON.parse(localStorage.getItem("items"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, date, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteTodoComplete = () => {
    let newTodos: ITodo[] = [...todos];
    newTodos = newTodos.filter((todo) => todo.complete !== true);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const formattedDate = (date: any) => {
    if (moment().diff(date, "days") > 0) {
      return "red";
    }
    if (
      moment().diff(date, "days") === 0 ||
      moment().diff(date, "days") === -1 ||
      moment().diff(date, "days") === -2
    ) {
      return "lightyellow";
    }
    return "";
  };

  return (
    <StyledWrap>
      <h1>Todo List</h1>
      <StyledDeleteComplete>
        {" "}
        {todos.length > 0 && (
          <Button variant="secondary" handleClick={deleteTodoComplete}>
            Delete Todo Complete
          </Button>
        )}
      </StyledDeleteComplete>
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledWrapInput>
            <label>Description</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </StyledWrapInput>
          <StyledWrapInput>
            {}
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </StyledWrapInput>
          <StyledButtonAdd>
            <Button variant="primary" type="submit">
              <i className="fas fa-plus"></i>
            </Button>
          </StyledButtonAdd>
        </StyledForm>
      </div>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <StyledTodo key={index}>
              <StyledText>
                <div>{todo.text}</div>
                <div>to be completed by: {todo.date}</div>
              </StyledText>
              <StyledAllarm
                style={{
                  textDecoration: todo.complete ? "line-through" : "",
                  backgroundColor: formattedDate(todo.date),
                }}
              >
                {formattedDate(todo.date) === "red" ? (
                  <div>
                    <i className="fas fa-exclamation"> </i>Task expired
                  </div>
                ) : (
                  ""
                )}
                {formattedDate(todo.date) === "lightyellow" ? (
                  <div>
                    <i className="fas fa-exclamation"> </i>short-term tasks
                  </div>
                ) : (
                  ""
                )}
              </StyledAllarm>
              <StyledButtonTodo>
                <StyledComplete>
                  <Button
                    variant="primary"
                    handleClick={(): void => completeTodo(index)}
                  >
                    {todo.complete ? "Incomplete" : "Complete"}
                  </Button>
                </StyledComplete>
                <button type="button" onClick={(): void => deleteTodo(index)}>
                  <i className="fas fa-trash"></i>
                </button>
              </StyledButtonTodo>
            </StyledTodo>
          );
        })}
      </section>
    </StyledWrap>
  );
};

export default Home;

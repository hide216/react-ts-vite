import { useState } from "react";
import Todo from "./Todo";

export function TodoContainer() {
  const [todoText, setTodoText] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [mikanryouTodo, setMikanryouTodo] = useState<string[]>([]);
  const [kanryouTodo, setkanryouTodo] = useState<string[]>([]);

  const textOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const addOnClickHandler = () => {
    if (todoText != "") {
      setErrMsg("");
      setTodoText("");
      setMikanryouTodo([...mikanryouTodo, todoText]);
    } else {
      setErrMsg("文字を入力してください");
    }
  };
  const deleteOnClickHandler = (index: number) => {
    const deletedMikanryoTodo = mikanryouTodo.filter((val, i) => index != i);
    setMikanryouTodo(deletedMikanryoTodo);
  };
  const kanryouOnClickHandler = (index: number) => {
    let popVal: string = "";
    const deletedMikanryoTodo = mikanryouTodo.filter((val, i) => {
      if (index === i) {
        popVal = val;
        return false;
      }
      return true;
    });
    setMikanryouTodo(deletedMikanryoTodo);
    setkanryouTodo([...kanryouTodo, popVal]);
  };

  const motonimodosuOnClickHandler = (index: number) => {
    let popVal: string = "";
    const deletedkanryoTodo = kanryouTodo.filter((val, i) => {
      if (index === i) {
        popVal = val;
        return false;
      }
      return true;
    });
    setMikanryouTodo([...mikanryouTodo, popVal]);
    setkanryouTodo(deletedkanryoTodo);
  };

  return (
    <>
      <Todo
        text={todoText}
        errMsg={errMsg}
        mikanryouTodo={mikanryouTodo}
        kanryouTodo={kanryouTodo}
        textOnChange={textOnChange}
        addOnClickHandler={addOnClickHandler}
        kanryouOnClickHandler={kanryouOnClickHandler}
        deleteOnClickHandler={deleteOnClickHandler}
        motonimodosuOnClickHandler={motonimodosuOnClickHandler}
      />
    </>
  );
}
export default Todo;

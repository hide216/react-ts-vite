import InputBox from "./InputBox";

declare type TodoProps = {
  text: string;
  errMsg: string;
  kanryouTodo: string[];
  mikanryouTodo: string[];
  textOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addOnClickHandler: () => void;
  kanryouOnClickHandler: (index: number) => void;
  deleteOnClickHandler: (index: number) => void;
  motonimodosuOnClickHandler: (index: number) => void;
};

export function Todo(props: TodoProps) {
  return (
    <>
      <div>
        <h1>Todo</h1>
        <InputBox
          text={props.text}
          errMsg={props.errMsg}
          textOnChange={props.textOnChange}
          addOnClickHandler={props.addOnClickHandler}
        />
        <div className="card">
          {props.mikanryouTodo != null && props.mikanryouTodo.length != 0 && (
            <>
              <h2>未完了タスク</h2>
              <ul>
                {props.mikanryouTodo.map((val, index) => {
                  return (
                    <>
                      <li key={index}>{val}</li>
                      <input
                        type="button"
                        value="完了"
                        onClick={() => props.kanryouOnClickHandler(index)}
                      />
                      <input
                        type="button"
                        value="削除"
                        onClick={() => props.deleteOnClickHandler(index)}
                      />
                    </>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        <div className="card">
          {props.kanryouTodo != null && props.kanryouTodo.length != 0 && (
            <>
              <h2>完了タスク</h2>
              <ul>
                {props.kanryouTodo.map((val, index) => {
                  return (
                    <>
                      <li key={index}>{val}</li>
                      <input
                        type="button"
                        value="元に戻す"
                        onClick={() => props.motonimodosuOnClickHandler(index)}
                      />
                    </>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Todo;

type InputBoxProps = {
  text: string;
  errMsg: string;
  textOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addOnClickHandler: () => void;
};

export function InputBox(props: InputBoxProps) {
  return (
    <>
      <div className="card">
        <input
          type="text"
          id="name"
          name="name"
          onChange={props.textOnChange}
          value={props.text}
        />
        <input type="button" onClick={props.addOnClickHandler} value="追加" />
        <p>{props.errMsg}</p>
      </div>
    </>
  );
}
export default InputBox;

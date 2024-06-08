import { memo } from "react";
interface EventData {
  data: string[];
}
export const Events = memo(function (props: EventData) {
  console.log("下画面の描画");
  return (
    <>
      <div>
        <h1>Events</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          {props.data}
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
});

export default Events;

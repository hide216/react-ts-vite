import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import Events from "./Events";

export function EventsContainer() {
  console.log("画面描画");
  const [val, setVal] = useState<string[]>([]);
  const ref = useRef(false);

  const fetchData = useCallback(async () => {
    try {
      // axiosを使用してAjaxリクエストを行う
      const response = await axios.get("http://localhost:5173/dammy.json");
      setVal([...val, response.data.message]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    console.log("Useffect実施");
    fetchData();
    ref.current = true;
  }, [fetchData]);

  console.log(val);
  return <>{ref.current ? <Events data={val} /> : ""}</>;
}

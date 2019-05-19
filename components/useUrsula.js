import { useState, useEffect } from "react";

export default function useUrsula(url) {
  const [data, setData] = useState([]);
  
  async function getData() {
    const response = await fetch(url);
    const data = await response;
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return data;
}
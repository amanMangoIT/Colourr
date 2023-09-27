import { useState } from "react";

import "./App.css";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [color, setColor] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColor(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Form addColor={addColor} />
      <ColorList color={color} />
      <ToastContainer />
    </>
  );
}

export default App;

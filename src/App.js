import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";


const App = () => {
  const [items, setItems] = useState("");
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

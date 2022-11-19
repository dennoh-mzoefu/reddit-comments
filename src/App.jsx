import { useState } from "react";
import "./App.css";
import Comment from "./Comment";
import { comments } from "./dummy.js";

function App() {
  return (
    <div className="App">
      <div className="add"></div>
      <div className="comment__app">
        <Comment comments={comments} width={95} />
      </div>

      <div className="add"></div>
    </div>
  );
}

export default App;

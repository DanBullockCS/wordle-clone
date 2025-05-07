import { useState } from "react";
import Header from "./Components/Header";
import Game from "./Components/Game";

function App() {
  // Keep track of open modal state
  // Probably would make a Modal redux in production:
  const [modal, setModal] = useState("howToPlay");

  return (
    <div className="App">
      <Header modal={modal} setModal={setModal} />
      <Game modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;

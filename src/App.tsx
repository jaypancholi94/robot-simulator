import React from "react";
import { Layout } from "./components/layout";
import { RobotProvider } from "./context/robot-context";

function App() {
  return (
    <div className="App">
      <RobotProvider>
        <Layout />
      </RobotProvider>
    </div>
  );
}

export default App;

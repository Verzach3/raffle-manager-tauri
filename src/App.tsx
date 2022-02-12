import { PrimaryButton } from "@fluentui/react";
import { useState } from "react";
import ShellTest from "./components/ShellTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ShellTest/>
    </div>
  );
}

export default App;

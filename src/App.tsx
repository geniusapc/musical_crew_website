import React from "react";
import TextField from "./TextField";

const App: React.FC = () => {
	return <div className="App">
    <TextField text="hello" person={{firstName:"jbvkjsd",lastName:"vjskdv"}} />
  </div>;
};

export default App;

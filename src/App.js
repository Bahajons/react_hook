import { useContext } from "react";
import ComponentA from "./component/ComponentA";
import { UserContext, UserProvider } from "./component/useContext";

function App() {

  // const a = useContext()

  return (
    <UserProvider value={UserContext._currentValue}>
      <div className="App">
        {console.log(UserContext._currentValue)}
        <ComponentA />
      </div>
    </UserProvider>
  );
}

export default App;

import { useState } from "react";
import ComponentA from "./component/ComponentA";
import { UserContext, UserProvider } from "./component/useContext";

function App() {

  // const a = useContext()
  const [context, setContext] = useState('default value')

  return (
    <UserProvider value={[context, setContext]}>
      <div className="App">
        <ComponentA />
      </div>
    </UserProvider>
  );
}

export default App;

import { useState } from "react";
import Button from "./components/Button";



function App() {
 const [ text, setText ] = useState("Let's learn more about testing in React")
 const handleText = ()=> setText('New Text!')
  return (
    <div>
      <h1>Hello world!</h1>
      <p>{text}</p>
      <Button disable={true} onClick={()=> handleText()}> Click aqui</Button>
    </div>
  );
}

export default App;

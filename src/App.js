import { useState } from "react";
import { data } from "./data";
import Birds from "./Birds";

function App(){
  const[bird, setBird] = useState(data);
  return(
    <Birds parrot= {bird}/>
  )
}

export default App;

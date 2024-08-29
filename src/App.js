import { useState } from "react";
import { data } from "./data";
import Birds from "./Birds";

function App(){
  const[bird, setBird] = useState(data);
  return(
    <Birds Parrot= {bird}/>
  )
}

export default App;
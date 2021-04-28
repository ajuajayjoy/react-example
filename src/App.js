
import './App.css';
import {Songlist} from './componet/songlist';

function App() {


  return (
    <div className="App">
     <h1>FED React Assignment :Multiple Componet JSON </h1>
     <h3>Display song info Using JSON</h3>
     <label>Number of songs in playlist  :</label>
      <Songlist></Songlist>
    <br></br>
  
    </div>
  );
}

export default App;

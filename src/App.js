import './App.css';
import Assingment from './compontents/Assingment/Assingment';
import DataBar from './compontents/DataBar/DataBar';
import NavBar from './compontents/NavBar/NavBar';
import Pricing from './compontents/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Assingment></Assingment>
      <DataBar></DataBar>
    </div>
  );
}

export default App;

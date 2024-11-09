import logo from './logo.svg';
import './App.css';
import Addtodo from './Test/addtodo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/addtodo"  element={<Addtodo/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;

import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
<Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add/>} />

    </Routes>
    </div>
  );
}

export default App;

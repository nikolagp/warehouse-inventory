import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Pages from './pages/Pages';
// import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        {/* <Home /> */}
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

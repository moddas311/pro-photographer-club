import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
// this my comment
function App() {
  return (
    <div className="App">
      <Home></Home>
      <Blog></Blog>
    </div>
  );
}

export default App;

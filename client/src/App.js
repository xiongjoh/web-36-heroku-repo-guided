import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';


// development
// production

function url(path) {
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:5000${[path]}`
  : path

}

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    // heroku.com/nice-app
    // localhost:5000
    fetch(url('/api/data'))
    .then(res => res.json())
    .then(goods => setData(goods.json))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;

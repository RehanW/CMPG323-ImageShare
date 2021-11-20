import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Upload from './containers/Upload'
import Home from './containers/Home'
import './index.css'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/upload' component={Upload}/>
        <Route path='/' component={Home}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


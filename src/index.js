import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Router } from 'react-router-dom'
import Upload from './containers/Upload'
import './index.css'

const App = () => {
  return (
    <HashRouter>
      <Router>
        <Route path='/' component={Home}/>
        <Route path='/upload' component={Upload}/>
      </Router>
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


import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Upload from './containers/Upload'
import Home from './containers/Home'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path= '/upload' component={Upload}/>
        <Route path= '/' component={Home}/>
      </Switch>
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


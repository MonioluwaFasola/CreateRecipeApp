import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/Create">
           <Create/>
        </Route>
        <Route path = "/Recipes/:id">
          <Recipe/>
        </Route>
        <Route path = "/Search">
          <Search/>
        </Route>

      </switch>
      </BrowserRouter>
    </div>
  );
}

export default App

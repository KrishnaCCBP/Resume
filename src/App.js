import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Education from './components/Education/index'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

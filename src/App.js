import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 5;
const [progress, setProgress] = useState(10);
  const showProgress = (progress)=>{
    setProgress(progress)
  }
 
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        height={3}  
        color='#f11946'
        progress={progress}
      />
          <Switch>
          <Route exact path="/"><News showProgress={showProgress} key="general" pageSize={pageSize} country="in" category="general"/> </Route>
          <Route exact path="/business"><News showProgress={showProgress} key="business" pageSize={pageSize} country="in" category="business"/> </Route>
          <Route exact path="/entertainment"><News showProgress={showProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/> </Route>
          <Route exact path="/general"><News showProgress={showProgress} key="generall" pageSize={pageSize} country="in" category="general"/> </Route>
          <Route exact path="/health"><News showProgress={showProgress} key="health" pageSize={pageSize} country="in" category="health"/> </Route>
          <Route exact path="/science"><News showProgress={showProgress} key="science" pageSize={pageSize} country="in" category="science"/> </Route>
          <Route exact path="/sports"><News showProgress={showProgress} key="sports" pageSize={pageSize} country="in" category="sports"/> </Route>
          <Route exact path="/technology"><News showProgress={showProgress} key="technology" pageSize={pageSize} country="in" category="technology"/> </Route>
        </Switch>
        </Router>
      </div>
    )

}

export default App


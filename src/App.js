import HomePage from "./HomePage";

import { Navbar } from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Create from "./Create";

function App() {
  return (   <Router>
    <div className="App">
      <Navbar />
      <div className="content">
   
      <Switch>
       
       <Route path='/' exact component={HomePage} />
       <Route path='/create' exact component={Create} />
      
      </Switch>
     
      </div>
    </div>
    </Router>
  );
}

export default App;

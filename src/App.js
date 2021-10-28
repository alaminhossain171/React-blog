import HomePage from "./HomePage";

import { Navbar } from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (   <Router>
    <div className="App">
      <Navbar />
      <div className="content">
   
      <Switch>
       
       <Route path='/' exact component={HomePage} />
       <Route path='/create' exact component={Create} />
       <Route path='/details/:id' exact component={BlogDetails} />
       <Route path='*' exact component={NotFound} />
      </Switch>
     
      </div>
    </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,
Route,
Switch} from 'react-router-dom';
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import store from "./store";
import Logout from "./Logout";

const App = () => {
  return (
    <Provider store={store}>

    <Router>
      <Navbar/>
      <div className="container">
          <Switch>
            <Route exact path='/'>
                <h1>Main</h1>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/register'>
              <Register/>
            </Route>
          </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

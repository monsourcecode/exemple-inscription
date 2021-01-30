import './App.css';
 import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import List from "./screens/list/list";
import Register from "./screens/register/register";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/register"/>
                </Route>
                <Route path="/register" component={Register}/>
                <Route path="/list" component={List}/>
             </Switch>
        </Router>
    );
}

export default App;

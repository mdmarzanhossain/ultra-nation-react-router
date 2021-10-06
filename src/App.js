import './App.css';
import Country from "./Country/Country";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NoMatch from "./NoMatch/NoMatch";
import CountryDetails from "./CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Country></Country>
            </Route>
            <Route path="/country/:name">
                <CountryDetails></CountryDetails>
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>

    </Router>
  );
}

export default App;

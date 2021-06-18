import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from "./list/List";
import Pokemon from "./pokemon/Pokemon";

function Routes() {
  return (
    <Router>
        <Link to='/'>
          <h1>Pokedex</h1>
        </Link>
        <Switch>
          <Route path="/pokemon/:pokeId">
            <Pokemon />
          </Route>
          <Route path="/">
            <List / >
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;
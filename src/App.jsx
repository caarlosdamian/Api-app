import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/molecules/NavBar/Navbar";
import { routes } from "./routes/routes";
function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>{routeComponents}</Switch>
      </Router>
    </div>
  );
}

export default App;

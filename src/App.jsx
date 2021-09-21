import "./App.css";
import Header from "./components/Header/Header";
import TableData from "./components/TableData/TableData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={TableData} />
          <Route path="/:id" exact component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

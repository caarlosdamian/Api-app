import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/molecules/NavBar/Navbar";
import { routes } from "./routes/routes";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
function App() {
  const [theme, setTheme] = useState(false);
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar setTheme={setTheme} theme={theme} />
        <Switch>{routeComponents}</Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/"
import HTTP501 from "./components/HTTP501"
import HTTP404 from "./components/HTTP404"

function App() {
    return (
        <Router>
            <Switch>
                <Route render={routerProps => <HTTP501 {...routerProps} />} exact path="/" />
                <Route render={routerProps => <HTTP404 {...routerProps} />} />
            </Switch>
        </Router>
    )
}

export default App

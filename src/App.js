import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BiereManager from "./containers/BiereManager/BiereManager"
import UneBiere from "./containers/UneBiere/UneBiere";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import FloatingCart from "./components/FloatingCart/FloatingCart";
import Navbar from "./components/NavBar/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <FloatingCart/>
      <Switch>
        <Route path="/" exact render={() => <h1>Accueil</h1>}/>
        <Route path="/bieres" exact component={BiereManager}/>
        <Route path="/bieres/:id" render={(props) => <UneBiere nomBiere={props.match.params.id} {...props}/>} />
      </Switch>
      
    </Router>
   
  );
}

export default App;

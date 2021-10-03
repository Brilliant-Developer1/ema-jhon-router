
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './compo/Header/Header';
import Shop from './compo/Shop/Shop';
import OrderReview from './compo/OrderReview/OrderReview';
import Inventory from './compo/Inventory/Inventory';
import NotFound from './compo/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
            <Shop></Shop>
            </Route>
            <Route path='/shop'>
            <Shop></Shop>
            </Route>
            <Route path='/orderReview'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

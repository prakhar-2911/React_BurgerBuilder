import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import Layout from './hoc/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
//import {BrowserRouter} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';


class App extends Component {
  render() {
    return (
      <div>

      <Layout>

<Switch>
<Route path="/checkout" component={Checkout}/>
<Route path="/" exact component={BurgerBuilder}/>
<Route path="/auth" component={Auth}/>
<Route path="/orders" component={Orders}/>
</Switch> 
</Layout>

      </div>
    );
  }
}

export default App;

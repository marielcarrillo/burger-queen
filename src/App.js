import React,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexApp from './Components/IndexApp/IndexApp'
import OrderSection from './Components/OrderSection/OrderSection.js'
import KitchenSection from './Components/KitchenSection/kitchenSection'
import HistorialSection from './Components/HistorialSection/HistorialSection'
import '../src/App.scss';

const App = () => {
  return (
    <Fragment>
    
      <Router>
          <Switch>
            <Fragment>
              <Fragment>
                <Route path ='/' exact component = {IndexApp} />
              </Fragment>
              <Fragment>
                <Route path ='/orden' component={OrderSection}/>
              </Fragment>
              <Fragment>
                <Route path= '/cocina' component= {KitchenSection}/>
              </Fragment>
              <Fragment>
                <Route path = '/historial' component = {HistorialSection}/>
              </Fragment>    
            </Fragment>
          </Switch>
      </Router>
    </Fragment>
    
   
   );
}
 
export default App;

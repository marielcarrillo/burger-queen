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
            <div className='app'>
              <div className='indexApp'>
                <Route path ='/' exact component = {IndexApp} />
              </div>
              <div className= 'content'>
                <Route path ='/orden' component={OrderSection}/>
              </div>
              <div>
                <Route path= '/cocina' component= {KitchenSection}/>
              </div>
              <div>
                <Route path = '/historial' component = {HistorialSection}/>
              </div>    
            </div>
          </Switch>
      </Router>
    </Fragment>
    
   
   );
}
 
export default App;

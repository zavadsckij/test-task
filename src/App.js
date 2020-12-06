import './null.css'
import './App.css';
import Card from './components/Card/Card';
import Basket from './components/Basket/Basket';
import {connect} from 'react-redux';


function App({cards}) {
  return (
    
       <div className="app">
      <div className="cards">
        {cards.map((product, i)=>{
          return <Card key = {i} product = {product}/>
        })}
        <Basket />
      </div>
    </div>
  );
}

const mstp = state => {
 return  {cards: state.products}
}

export default connect(mstp, {})(App);

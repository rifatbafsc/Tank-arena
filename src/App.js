import logo from './logo.svg';
import './App.css';
import Title from './component/Title/Title';
import { useEffect, useState } from 'react';
import TankCard from './component/TankCard/TankCard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TankCart from './component/TankCart/TankCart';



function App() {
  const [tanks, setTank]= useState([]);
  const [cart, setCart] =useState([]);
  const[chooseOne, setChooseOne] =useState([]);

  useEffect(()=>{
    fetch('tankshow.json')
    .then(res => res.json())
    .then(data => setTank(data));
  },[]);

const addToCart= (tank)=>{
  // console.log(cart.length);
  if(cart.length<=3){
  setCart([...cart,tank]);       
  }else{
       alert("you can't add More than 4 Items");
  }
}
const chooseAgain=()=>{
  setCart([]);
  setChooseOne([]);
}
const randomChoose=()=>{
 const randomItem = cart[Math.floor(Math.random() * cart.length)];
      // document.getElementById('mypic').style.visibility('visible');
  setChooseOne(randomItem);
      
  }

  return (
    <div className="App">
     <Title></Title>
          <div className='row'>
           <div className='col-9 card-shape mt-4'>
           {
              tanks.map(tank=>(
                <TankCard key={tank.id} tankData={tank} addToCart={addToCart}></TankCard>
              ))
            }
           </div>
           <div className='col-3'>
                {
                   
                     <TankCart chooseOne={chooseOne} randomChoose={randomChoose} chooseAgain={chooseAgain} 
                      cart={cart}></TankCart>
                   
                 
                }
           </div>
          </div>

          
    </div>
  );
}

export default App;

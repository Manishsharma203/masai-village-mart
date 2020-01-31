import React from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom"
import Home from './components/Home'
import About from './components/About';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Product from './components/Product'
import Product2 from './components/Product2'
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import SortedFruits from './components/SortedFruits';
import SortedVegis from './components/SortedVegis';
import Error from './components/Error'
import LoginTrue from './components/LoginTrue'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      fruits:[],
      vegis:[],
      array:[],
      creds:false
    }
  }
  componentDidMount=()=>{
    axios.get('./data.json')
    .then(res=>this.setState({
      fruits:res.data[0],
      vegis:res.data[1]
    }))
    .catch(err=>console.log(err))
  }

  callback1=(child)=>{
    let prevArr=this.state.array
    this.setState({
      array:[...prevArr,[child[0],child[1],child[2]]]
    })
  }
  callback2=(child)=>{
    let prevArr=this.state.array
    this.setState({
      array:[...prevArr,[child[0],child[1],child[2]]]
    })
  }

  loginCall=(child)=>{
    this.setState({
      creds:child
    })
  }
  

render(){
  return (
    <BrowserRouter>
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top">
      
            <Link className='navbar-brand ml-md-2 ml-0 d-flex flex-column flex-sm-row' to="/">
              <img src='/VMlogo.png' style={{width:'120px'}} alt=''/> 
              <span className='text-success ml-md-2 my-auto vm-span'>VILLAGE MART</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="material-icons"> menu </i></span>
            </button>
            <div className="collapse navbar-collapse ml-md-5" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-md-auto">
              <li>
                  <Link to='/'><p className='text-dark my-2 mr-5'>Home</p></Link>
                </li>
                <li>
                  <Link to='/about'><p className='text-dark my-2 mr-5'>About</p></Link>
                </li>
                <li>
                  <Link to='/shop'><div className='text-white my-1 mr-5 btn btn-success'>Shop with us</div></Link>
                </li>
                <li>
                  <div className="dropdown my-1 mr-5">
                      <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop by category</button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className='dropdown-item'><Link className='text-success' to='/fruits'>Fruits</Link></p>
                            <p className='dropdown-item'><Link className='text-success' to='/vegetables'>Vegetables</Link></p>
                      </div>
                  </div>
                </li>
                <li>
                  <Link to='/login'><p className='text-dark my-2 mr-5'>Login</p></Link>
                </li>
                <li>
                  <Link to='/shoppingcart'><i className="material-icons" style={{fontSize:'40px'}}> shopping_cart </i></Link>
                </li>
              </ul>
            </div>
        </nav>

        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route exact path='/about' render={()=><About/>} />
          <Route exact path='/shop' render={()=><Shop/>} />
          <Route exact path='/fruits/:orderBy(asc|desc)' render={(props)=><SortedFruits sortF={this.state.fruits} {...props}/>}/>
          <Route exact path='/vegetables/:orderBy(asc|desc)' render={(props)=><SortedVegis sortV={this.state.vegis} {...props}/>}/>
          <Route exact path='/fruits/fruitsinfo/:id' render={(props)=><Product parentCallback1={this.callback1} datas={this.state.fruits.filter(e=> e.id==props.match.params.id)} {...props}/>}/>
          <Route exact path='/vegetables/vegetablesinfo/:id' render={(props)=><Product2 parentCallback2={this.callback2} datas={this.state.vegis.filter(e=> e.id==props.match.params.id)}/>}/>
          <Route exact path='/fruits' render={(props)=><Fruits data1={this.state.fruits} {...props}/>} />
          <Route exact path='/vegetables' render={()=><Vegetables data2={this.state.vegis} />} />
          <Route exact path='/shoppingcart' 
                render={()=>
                (this.state.creds==true ?
                  <Cart cartData={this.state}/>:
                  <Redirect to={{pathname:"/login"}}/>
                  )
                }/>
          <Route exact path='/login' 
                render={(props)=>
                  (this.state.creds==false ?
                  <Login loginCallback={this.loginCall} {...props}/>:
                  <LoginTrue/>
                  )
                  }/>
          <Route render={()=><Error/>}/>
        </Switch>

        <div className='bg-dark text-white d-flex py-4' style={{fontSize:'12px'}}>
          <div className='mx-3 mx-md-5'>
            <div className='font-weight-bold'>Support</div>
            <br></br>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>Help</p>
          </div>
          <div className='mx-3 mx-md-5'>
            <div className='font-weight-bold'>
            <Link to='/shop' className='text-white'>Shop</Link>
            </div>
            <br></br>
            <p><Link to='/fruits' className='text-white'>Fruits</Link></p>
            <p><Link to='/vegetables' className='text-white'>Vegetables</Link></p>
          </div>
          <div className='mx-3 mx-md-5'>
            <div className='font-weight-bold'>
            <Link to='/about' className='text-white'>About Us</Link>
              </div>
            <br></br>
            <p><Link to='/login' className='text-white'>Sign In</Link></p>
            <p><Link to='/shoppingcart' className='text-white'>My Cart</Link></p>
          </div>
          <div className='dropdown-divider text-white'></div>
        </div>
        <div className='bg-secondary text-white text-center py-2'>
          <div>MADE WITH 💟 AT MASAI</div>
          <div className='font-italic'><small>DISCLAIMER: I do not claim ownership of any of the images and content on this website</small></div>
        </div>
      </React.Fragment>
    </BrowserRouter>
    );
  }
}

export default App;

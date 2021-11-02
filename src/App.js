import {Route,Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(onSnapshot => {
          this.setState({
            currentUser:{
              id: onSnapshot.id,
              ...onSnapshot.data()
            }
          }, () =>  console.log(this.state))
         console.log(this.state);
        });
      }
      this.setState({currentUser:userAuth});
    });
  
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact  path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignOut}/>
      </Switch>
      </div>
      
      
    );
  }
}

export default App;

import {Route,Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';



const ComicBooksPage = () => (
  <div>
    <h1>COMIC BOOKS Page</h1>

  </div>


)


function App() {
  return (
    <div>
    <Switch>
    <Route exact  path='/' component={Homepage}/>
    <Route   path='/comicbooks' component={ComicBooksPage}/>
    </Switch>
    </div>
     
    
  );
}

export default App;

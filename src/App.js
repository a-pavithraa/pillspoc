
import './App.scss';
import React,{useContext} from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Layout from './components/UI/Layout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  const loggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
   
    <div className="App">
      <header className="App-header">
        <Layout>
          <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/search' exact>
         {isLoggedIn? <SearchForm />:<Login/>}
        </Route>
        </Switch>
        </Layout>
      
      </header>
    </div>
  
  );
}

export default App;

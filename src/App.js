
import './App.scss';
import React,{useContext} from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Layout from './components/UI/Layout';
import Login from './pages/Login';
import AuthContext from './store/auth-context';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  const ctx = useContext(AuthContext);
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
         {ctx.isLoggedIn? <SearchForm />:<Login/>}
        </Route>
        </Switch>
        </Layout>
      
      </header>
    </div>
  
  );
}

export default App;

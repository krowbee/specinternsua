import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite'
import LoginPage from './pages/LoginPage';
import WorkshopPage from './pages/WorkshopPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const {store} = useContext(Context)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])
  if(store.isLoading){
    return(
      <div class="loading-container">
      <div class="loader"></div>
      </div>)
  }
  return (
    <BrowserRouter>
    <div className="App flex flex-col w-full">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="workshop/login" element={<LoginPage />}></Route>
        <Route path='workshop/home' element={
          <ProtectedRoute isLoginned={store.isAuth}>
            <WorkshopPage></WorkshopPage>
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default observer(App);

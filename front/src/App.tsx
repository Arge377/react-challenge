import { useEffect } from 'react';
import './App.css';
import Rutas from './routes';
import { setBearer } from './services/apiClient';
import { authService } from './services/auth.service';

function App() {
  useEffect( () => {
    const getToken = async () => {
      const token = await authService.authorize({username: "sarah", password: "connor"});
      localStorage.setItem('token', token);
    };
    
    const localToken = localStorage.getItem('token');
    localToken ? setBearer(localToken) : getToken();
  }, [])
  
  return <>
    <Rutas/>
  </>;
}

export default App;

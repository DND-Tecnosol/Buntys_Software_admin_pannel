import logo from './logo.svg';
import './App.css';
import AuthRouts from './Routes/AuthRouts';
import { store } from './Store'
import Routs from './Routes/Routs';
import { useSelector, Provider } from 'react-redux';

function App() {
  const { authStatus } = useSelector((s) => s.auth)
  return (
    <>
        {authStatus ? <Routs /> : <AuthRouts />}
    </>
  );
}

export default App;

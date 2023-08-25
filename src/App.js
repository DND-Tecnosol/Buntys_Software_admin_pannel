import AuthRouts from './Routes/AuthRouts';
import { store } from './Store'
import Routs from './Routes/Routs';
import { useSelector, Provider } from 'react-redux';
import './app.css'
function App() {
  const { authStatus } = useSelector((s) => s.auth)
  return (
    <>
        {authStatus ? <Routs /> : <AuthRouts />}
    </>
  );
}

export default App;

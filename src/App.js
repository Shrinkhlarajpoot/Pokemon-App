import './App.css';
import { gapi } from 'gapi-script';
import { PublicRoute } from './routes/PublicRoute';
import { Navbar } from './components/Navbar';
import { useGoogleAuth } from './context/authContext';
function App() {
  const { token } = useGoogleAuth();
  return (
    <div className='App'>
      {token?<Navbar/>:null}
      <PublicRoute/>
    </div>
  );
}

export default App;


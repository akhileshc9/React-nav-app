import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { useRoutes } from 'react-router-dom'
import {appRoutes} from './routes'
function App() {
  const element = useRoutes(appRoutes)
  return (
    <div className="App">
      <LandingPage/>
      {element}
    </div>
  );
}

export default App;

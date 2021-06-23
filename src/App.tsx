import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles/global.scss';

import {AuthContextProvider} from './contexts/AuthContext';


function App() {
   return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import AppRouter from './components/Router';
import Main from './pages/Main';

function App() {
  const [isLoggedIn, setIsLoaggedIn] = useState(true);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;

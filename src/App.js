import { useState } from 'react';
import AppRouter from './components/Router';
import { authService } from './util/fbase';

function App() {
  const [isLoggedIn, setIsLoaggedIn] = useState(true);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;

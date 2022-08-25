import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '../routes/Auth';
import Main from '../pages/Main';
import Test from '../pages/Test';

const AppRouter = () => {
  const [isLoggedIn, setIsLoaggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/' element={<Main />} />
          </>
        ) : (
          <Route path='/' element={<Test />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import firebase from 'firebase/compat/app'; // import firebase from 'firebase/compat';
import Main from '../pages/Main';
import Auth from '../routes/Auth';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/' element={<Main />} />
          </>
        ) : (
          <Route path='/' element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import firebase from 'firebase/compat/app'; // import firebase from 'firebase/compat';
import Main from '../pages/Main';
import Test from '../pages/Test';

const AppRouter = ({ isLoggedIn }) => {
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

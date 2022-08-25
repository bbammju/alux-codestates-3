import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Auth from '../routes/Auth';
import Header from './Header';
import PostItem from './PostItem';
import Faq from '../pages/Faq/Faq';
import FaqWrite from '../pages/Faq/FaqWrite';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/' element={<Main />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/post' element={<PostItem />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/faqwrite' element={<FaqWrite />} />
          </>
        ) : (
          <Route path='/' element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

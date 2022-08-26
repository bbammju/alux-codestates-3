import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Auth from '../routes/Auth';
import Header from './Header';
import PostItem from './PostItem';
import BoardPost from '../components/BoardPost';
import Faq from './Faq/Faqs';
import FaqWrite from './Faq/FaqWrite';

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/' element={<Main />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/detail/post' element={<BoardPost />} />
            <Route path='/post' element={<PostItem />} />
            <Route path='/faq' element={<Faq userObj={userObj} />} />
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

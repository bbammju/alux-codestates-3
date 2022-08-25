import PostItem from './components/PostItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/post" element={<PostItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

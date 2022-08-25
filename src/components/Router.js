import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Auth from "../routes/Auth";
import Header from "./Header";
import PostItem from "./PostItem";
import Footer from "./Footer";

const AppRouter = ({ isLoggedIn }) => {
	return (
		<Router>
			<Header isLoggedIn={isLoggedIn} />
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path="/" element={<Main />} />
						<Route path="/detail" element={<Detail />} />
						<Route path="/post" element={<PostItem />} />
					</>
				) : (
					<Route path="/" element={<Auth />} />
				)}
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;

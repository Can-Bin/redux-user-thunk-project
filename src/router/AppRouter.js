import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "../pages/Users"
import News from "../pages/News/News"
const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Users/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;
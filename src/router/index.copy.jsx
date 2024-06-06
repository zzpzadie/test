import App from '../App.jsx'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
const baseRouter = () =>(
    // //一开始用的组件形式写法
    <BrowserRouter>
        <Routes>
            <Route path="/test" element={<App/>}>
                <Route path="/test" element={<Navigate to={"/test/home"}></Navigate>}></Route>
                <Route path="/test/home" element={<Home></Home>}></Route>
                <Route path="/test/about" element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    //新的组件写法

)
export default baseRouter

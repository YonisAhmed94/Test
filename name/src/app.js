
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Feature from "./pages/feature"
import Service from "./pages/service"
import Blog from "./pages/Blog"
import Header from "./component/Header";


function App (){

    return <div>
        < Header />

    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        
    
    </Routes>

    </div>
}

export default App
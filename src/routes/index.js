import { Route, BrowserRouter, Routes ,Navigate} from "react-router-dom";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element ={<Navigate to ="/nearest"/>}/>
        <Route exact path="/:rides" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

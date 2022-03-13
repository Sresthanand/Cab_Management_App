import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element ={<Home/>}/>
        <Route exact path="/:rides" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

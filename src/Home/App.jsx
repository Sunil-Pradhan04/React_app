import React from "react";
import Api from "../Component/api";
import Header from "../Component/header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Men from "../Component/MEN";
import { Outlet } from "react-router-dom";
import DataProvider from "../Component/Store/All_data";
const App = () => {
  return (
   <DataProvider>
    <Header />
    <Outlet />
    </DataProvider>
  )
}
export default App;
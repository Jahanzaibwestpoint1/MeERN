import { Route, Routes } from "react-router";

import AddItem from "../pages/Item/AddItemPage";
import EditItem from "../pages/Item/EditItemPage";
import HomePage from "../pages/Home/HomePage";

//All Router Are add here with thier paths

const RouterDiver = () => {
    return(
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/addItem" element={<AddItem/>}/>
    <Route path="/editItem" element={<EditItem/>}/>
</Routes>
    )
}

export default RouterDiver;
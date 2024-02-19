import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";
import SavedItems from "./components/SavedItems";
// import ProtectedRoutes from "./utils/ProtectedRoutes";
import Register from "./components/Register";
import Home from "./components/Home";

import Layout from "./components/Layout";
import Missing from "./components/Missing";
import MealInput from "./components/meal/MealInput";
// import Logout from "./components/Logout";
import {RecipesProvider} from './context/RecipesContext'

function App() {
  return (
    <div>
      <RecipesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home />} />
              <Route path="/savedItems" element={<SavedItems />} />
              <Route path="/mealInput" element={<MealInput />} />
              {/* <Route path="/savedItems" element={<Logout/>} /> */}
            </Route>

            <Route  path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </RecipesProvider>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="sign-in" element={<h1>Sign in</h1>} />
                <Route path="sing-up" element={<h1>Sign up</h1>} />
            </Route>
        </Routes>
    );
};

export default App;

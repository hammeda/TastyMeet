import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
<<<<<<< HEAD
import Messaging from "../Pages/Messaging.jsx";
import Message from "../Pages/Message.jsx";
=======
import { Accueil } from "../Pages/Accueil.jsx";
>>>>>>> main

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
<<<<<<< HEAD
                <Route path="/messaging" element={<Messaging />} />
                <Route path="/message" element={<Message />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
=======
                <Route path="/Accueil" element={<Accueil />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
>>>>>>> main
            </Routes>
        </BrowserRouter>
    );
}


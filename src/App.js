import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebRoutes from './routes/WebRoutes'; // WebRoutes for the website
import AdminRoutes from './routes/AdminRoutes'; // AdminRoutes for the admin panel
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} /> {/* Corrected path for Admin */}

        {/* Website Routes (default) */}
        <Route path="/*" element={<WebRoutes />} /> {/* Corrected the path for Web Routes */}
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;

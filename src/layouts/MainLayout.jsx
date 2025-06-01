import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'; // adjust the path if needed

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-charcoal text-white font-sans">
            {/* Main container with glass effect */}
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-6">
                <Navbar />
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

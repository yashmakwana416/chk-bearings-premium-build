import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="px-4">
                <Navbar />
            </div>
            <main className={`flex-1 ${isHome ? 'pt-0' : 'pt-24'}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

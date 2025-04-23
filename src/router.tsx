import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages';

const AppRouter: React.FC = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            {/* Defina outras rotas conforme necessário */}
        </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;
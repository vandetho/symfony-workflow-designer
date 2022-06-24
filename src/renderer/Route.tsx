import React from 'react';
import { Route as RNRoute, Routes } from 'react-router-dom';
import { Empty } from './layouts';

const DashboardPage = React.lazy(() => import('./pages/Dashboard'));

const Route = () => (
    <Routes>
        <RNRoute path="/" element={<Empty />}>
            <RNRoute
                index
                element={
                    <React.Suspense fallback={<>...</>}>
                        <DashboardPage />
                    </React.Suspense>
                }
            />
        </RNRoute>
    </Routes>
);

export default Route;

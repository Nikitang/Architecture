import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    // Показываем лоадер при каждом изменении маршрута
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </>
    );
};

export default AppRouter;

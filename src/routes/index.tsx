import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';


function Main() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          {...route}
          key={route.path}
          element={
            <route.component />
          }
        />
      ))}
    </Routes>
  )
}
export default Main;

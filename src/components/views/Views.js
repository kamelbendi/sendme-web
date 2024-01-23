import { Routes, Route, Navigate } from 'react-router-dom';
//import InitialPage from '../../pages/initialPage/InitialPage';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';
import NotFound from '../../pages/not-found/NotFound';
import ProtectedRoutes from '../protected-routes/ProtectedRoutes';

function Views() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/main" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}></Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Views;
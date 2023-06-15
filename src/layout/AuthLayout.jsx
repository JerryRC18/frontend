import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto md:grid md:grid-cols-1  gap-10 pb-5 items-center">
            <Outlet />
        </main>
        <Footer/>

    </>
  )
};

export default AuthLayout;

import { Link } from 'react-router-dom'
const AdminNav = () => {
  return (
      <nav className='flex gap-3'>
            <Link 
                to="/user/perfil"
                className='font-bold uppercase text-[#154360] hover:text-[#00df9a]'
            >Perfil</Link>
            <Link 
                to="/user/cambiar-password"
                className='font-bold uppercase text-[#154360] hover:text-[#00df9a]'
            >Cambiar Password</Link>
      </nav>
  );
};

export default AdminNav;

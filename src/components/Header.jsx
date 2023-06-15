import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { cerrarSesion, auth } = useAuth();

  return (
    <header className="py-10 bg-gray-300">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="bg-[#154360] w-[15%] ml-2 text-center text-3xl py-4 rounded-lg font-bold text-[#00df9a]">
          JR
        </h1>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="/user/inicio" className="text-[#154360] hover:text-[#00df9a] text-sm uppercase font-bold">
            Inicio
          </Link>
          {auth.rol === 'admin' && ( // Mostrar el enlace solo si el rol es "admin"
            <Link to="/user/pacientes" className="text-[#154360] hover:text-[#00df9a] text-sm uppercase font-bold">
              Pacientes
            </Link>
          )}
          <Link to="/user/perfil" className="text-[#154360] hover:text-[#00df9a] text-sm uppercase font-bold">
            Perfil
          </Link>

          <button
            type="button"
            className="text-[#154360] hover:text-[#00df9a] text-sm uppercase font-bold"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
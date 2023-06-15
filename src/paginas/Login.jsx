import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'
import clienteAxios from '../config/axios'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });

            return 
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', {email, password})
            localStorage.setItem('token', data.token)
            setAuth(data)
            window.location.href = '/user';
            // navigate('/admin')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta
    return (
        <>
                
                <div>
                    <h1 className="text-[#00df9a] mt-4 text-center mx-12 font-black text-6xl">
                        Inicia Sesión
                    </h1>
                </div>


                <div className='mx-[30%] mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-[#154360]'>
                    {msg && <Alerta 
                        alerta={alerta}
                    />}

                    <form onSubmit={handleSubmit}>
                        <div className="my-5">
                            <label
                                className="uppercase text-[#00df9a] block text-xl font-bold"
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                placeholder="Email de Registro"
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label
                                className="uppercase text-[#00df9a] block text-xl font-bold"
                            >
                                Password
                            </label>
                            <input 
                                type="password"
                                placeholder="Tu Password"
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input 
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-[#00df9a] w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-[#099367] md:w-auto "
                        />

                    </form> 

                    <nav className='mt-10 lg:flex lg:justify-between'>
                        <Link 
                            className='block text-center my-5 text-[#00df9a]'
                            to="/registrar">¿No tienes una cuenta? Regístrate</Link >
                        <Link 
                            className='block text-center my-5 text-[#00df9a]'
                            to="/olvide-password">Olvide mi Password</Link >
                    </nav>
                </div>
                   
        </>
    );
};

export default Login;

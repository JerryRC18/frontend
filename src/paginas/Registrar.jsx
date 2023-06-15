import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const Registrar = () => {
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ rol, setRol ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, rol, password, repetirPassword].includes('')) {
            setAlerta({ msg: 'Hay campos vacios', error: true })
            return;
        }

        if(password !== repetirPassword) {
            setAlerta({ msg: 'Los Password no son iguales', error: true })
            return
        }

        if(password.length < 6) {
            setAlerta({ msg: 'El Password es muy corto, agrega minimo 6 caracteres', error: true })
            return
        }

        setAlerta({})

        // Crear el usuario en la api
        try {
            await clienteAxios.post('/veterinarios', { nombre, email, rol, password })
            setAlerta({
                msg: 'Creado Correctamente, revisa tu email',
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const { msg } = alerta

    return (
        <>
            <div>
                <h1 className="text-[#00df9a] text-center mt-3 font-black text-6xl">
                    Crea tu Cuenta 
                </h1>
            </div>

            <div className='mt-20 mx-[30%] md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-[#154360]'>

                { msg && <Alerta 
                    alerta={alerta}
                />}
                <form 
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label
                            className="uppercase text-[#00df9a] block text-xl font-bold"
                        >
                            Nombre
                        </label>
                        <input 
                            type="text"
                            placeholder="Tu Nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={ e => setNombre(e.target.value)}
                        />
                    </div>

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
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </div>
                   
                    <div className="my-5">
                        <label className="uppercase text-[#00df9a] block text-xl font-bold">
                        Rol
                        </label>
                    <select
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                    >
                        <option value="">Seleccionar Rol</option>
                        <option value="admin">Admin</option>
                        <option value="usuario">Usuario</option>
                    </select>
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
                            onChange={ e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-[#00df9a] block text-xl font-bold"
                        >
                            Repetir Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Repite tu Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange={ e => setRepetirPassword(e.target.value)}
                        />
                    </div>


                    <input 
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-[#00df9a] w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-[#099367] md:w-auto "
                    />

                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link 
                        className='block text-center my-5 text-[#00df9a]'
                        to="/">¿Ya tienes una cuenta? Inicia Sesión</Link >
                    <Link 
                        className='block text-center my-5 text-[#00df9a]'
                        to="/olvide-password">Olvide mi Password</Link >
                </nav>

            </div>

            
        </>
    )
  };
  
  export default Registrar;
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios'; 

const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})


    const handleSubmit = async e => {
        e.preventDefault()

        if(email === '' || email.length < 6) {
            setAlerta({msg: 'El Email es obligatorio', error: true})
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
            setAlerta({msg: data.msg})
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
                    Recupera tu Contraseña
                </h1>
            </div>

            <div className='mt-20 md:mt-5 mb-[10%] shadow-lg px-5 py-10 rounded-xl mx-[30%] bg-[#154360]'>

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

                    <input 
                        type="submit"
                        value="Enviar Instrucciones"
                        className="bg-[#00df9a] w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-[#099367] md:w-auto "
                    />
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link 
                        className='block text-center my-5 text-[#00df9a]'
                        to="/">¿Ya tienes una cuenta? Inicia Sesión</Link >
                    <Link 
                        className='block text-center my-5 text-[#00df9a]'
                        to="/registrar">¿No tienes una cuenta? Regístrate</Link >
                </nav>
            </div>
      </>
  )
};

export default OlvidePassword;

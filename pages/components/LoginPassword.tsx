import { useState, useEffect } from 'react';
import { useAuthContext } from '../hook/authContext';
import Cookies from 'js-cookie';

const LoginPassword = () => {
    const { setRut, rut } = useAuthContext();
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const storedRUT = Cookies.get('userRUT');
        if (storedRUT) {
            setRut(storedRUT);
        }
    }, [setRut]);

    const handleLogin = async () => {
        if (!rut || !password) {
            setErrorMessage('RUT y contraseña son requeridos');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://rec-staging.recemed.cl/api/users/log_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rut: rut,
                    password: password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                Cookies.set('authToken', token);
                Cookies.remove('userRUT');
                window.location.href = '/dashboard';
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.errors ? errorData.errors.detail : 'Error en la autenticación');
            }
        } catch (error) {
            setErrorMessage('Error en la solicitud de login');
            console.error('Error en la solicitud de login', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-100 px-8">
            <div className="w-full">
                <h2 className="text-gray-600 font-semibold text-xl text-left -ml-[12%]">Portal Paciente</h2>
                <h1 className="text-rm-blue-100 font-bold text-4xl mb-8 text-left -ml-[12%]">Ingresa a tu Portal</h1>
            </div>
            {errorMessage && <p className="text-red-500 text-left mb-4 -ml-[12%]">{errorMessage}</p>}
            <input
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-[140%] transform -translate-x-[10%] mb-4 p-1 border-2 border-blue-500 rounded-full text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleLogin}
                disabled={isLoading}
                className={`block w-[140%] transform -translate-x-[10%] p-1 text-white rounded-full uppercase text-lg ${isLoading ? 'bg-gray-400' : 'bg-rm-blue-100 hover:bg-rm-blue-200'}`}
            >
                {isLoading ? 'Ingresando...' : 'Ingresar'}
            </button>
        </div>
    );
};

export default LoginPassword;

import React, { useState } from 'react';
import { useAuthContext } from '../hook/authContext';
import Cookies from 'js-cookie';

const LoginRUT: React.FC = () => {
    console.time('useAuthContext in LoginRUT');
    const { setRut } = useAuthContext();
    console.timeEnd('useAuthContext in LoginRUT');

    const [inputRUT, setInputRUT] = useState<string>('');

    const handleNext = () => {
        console.time('handleNext in LoginRUT');
        if (inputRUT) {
            setRut(inputRUT);
            Cookies.set('userRUT', inputRUT);
            window.location.assign('/password');
        } else {
            console.error('Por favor, ingrese su RUT.');
        }
        console.timeEnd('handleNext in LoginRUT');
    };

    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-100 px-8">
            <div className="w-full">
                <h2 className="text-gray-600 font-semibold text-xl text-left -ml-[12%]">Portal Paciente</h2>
                <h1 className="text-rm-blue-100 font-bold text-4xl mb-8 text-left -ml-[12%]">Ingresa a tu Portal</h1>
            </div>
            <input
                type="text"
                placeholder="Ingresa su Rut"
                value={inputRUT}
                onChange={(e) => setInputRUT(e.target.value)}
                className="block w-[140%] transform -translate-x-[10%] mb-4 p-1 border-2 border-blue-500 rounded-full text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleNext}
                className="block w-[140%] transform -translate-x-[10%] p-1 text-white bg-rm-blue-100 hover:bg-rm-blue-200 rounded-full text-lg uppercase"
            >
                Siguiente
            </button>
        </div>
    );
};

export default LoginRUT;

import { useEffect, useState } from 'react';
import { FaFolderOpen, FaPaperclip } from 'react-icons/fa';
import { bgMedic } from '../../assets';

interface Receta {
    id: number;
    folio: string;
    fechaEmision: string;
    doctor: string;
    especialidad: string;
    codigo: string;
    tipo: string;
}

const Receta = () => {
    const [recetas, setRecetas] = useState<Receta[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecetas = async () => {
            try {
                const response = await fetch('http://rec-staging.recemed.cl/api/patients/prescriptions?page=1');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setRecetas(data.data);
            } catch (err) {
                setError('No se pudieron cargar las recetas. Intente nuevamente más tarde.');
                console.error(err);
            }
        };

        fetchRecetas();
    }, []);

    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
                {recetas.map((receta) => (
                    <div
                        key={receta.id}
                        className={`p-4 rounded-lg shadow-md relative w-full md:w-[120%] lg:w-[140%] mx-auto ${receta.tipo === 'Simple' ? 'bg-green-50' : 'bg-red-50'}`}
                        style={{
                            backgroundImage: `url(${bgMedic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <span className="text-sm font-bold text-gray-700 mb-2 md:mb-0">Folio:<span className="ml-1">{receta.folio}</span></span>
                            <div className="flex space-x-2 text-blue-500">
                                <span className="text-sm">Receta de Medicamentos</span>
                                <FaFolderOpen />
                                <FaPaperclip />
                            </div>
                        </div>
                        <div className="border-t border-blue-200 my-2"></div>
                        <p className="text-sm text-gray-700 mt-4 mb-2">Fecha de Emisión: {new Date(receta.fechaEmision).toLocaleDateString()}</p>
                        <h3 className="text-blue-500 font-bold text-lg mb-2">{`${receta.doctor}`}</h3>
                        <p className="text-sm text-gray-700 mb-2">{receta.especialidad}</p>
                        <p className="text-sm text-gray-700 mb-4">Código: <span className="font-bold">{receta.codigo}</span></p>
                        <div className="flex justify-end">
                            <button className="mt-4 p-2 bg-rm-blue-100 text-white hover:bg-rm-blue-200 rounded">VER</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Receta;
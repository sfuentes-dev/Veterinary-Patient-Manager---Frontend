import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
    const [pacientes, setPacientes] = useState(
        JSON.parse(localStorage.getItem('pacientes')) ?? []
    );
    const [patient, setPatient] = useState({});

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes]);

    const deletePatient = (id) => {
        const updatedPatients = pacientes.filter(
            (patient) => patient.id !== id
        );
        setPacientes(updatedPatients);
    };

    return (
        <div className='container mx-auto mt-20'>
            <Header />
            <div className='mt-20 md:flex mx-5 sm:gap-5'>
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    patient={patient}
                    setPatient={setPatient}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                />
            </div>
        </div>
    );
}

export default App;

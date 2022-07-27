import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPatient, deletePatient }) => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='text-white font-black text-center text-3xl'>
                        Patient List
                    </h2>
                    <p className='text-white text-lg mt-5 mb-10 text-center'>
                        Manage your{' '}
                        <span className='text-teal-400 font-bold'>
                            Patients and Appointments
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className='text-white font-black text-center text-3xl'>
                        No Patients
                    </h2>
                    <p className='text-white text-lg mt-5 mb-10 text-center'>
                        Start adding patientes and they{' '}
                        <span className='text-teal-400 font-bold'>
                            will appear below
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;

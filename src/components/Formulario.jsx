import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, patient, setPatient }) => {
    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setPet(patient.pet);
            setOwner(patient.owner);
            setPhone(patient.phone);
            setDate(patient.date);
            setSymptoms(patient.symptoms);
        }
    }, [patient]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const dateId = Date.now().toString();
        return random + dateId;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([pet, owner, phone, date, symptoms].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        //Create a Objet to save de date of each patient

        const objPatient = {
            pet,
            owner,
            phone,
            date,
            symptoms,
        };

        if (patient.id) {
            //Editing Patient
            objPatient.id = patient.id;
            const updatedPatients = pacientes.map((patientState) =>
                patientState.id === patient.id ? objPatient : patientState
            );

            setPacientes(updatedPatients);
            setPatient({});
        } else {
            //New Patient
            objPatient.id = generarId();
            setPacientes([...pacientes, objPatient]);
        }

        //Reiniciar el formulario
        setPet('');
        setOwner('');
        setPhone('');
        setDate('');
        setSymptoms('');
    };

    return (
        <div className='md:w-1/2 lg:w-2/5 mb-10 mx-5'>
            <h2 className='text-white font-black text-center text-3xl'>
                Follow-Up Patients
            </h2>
            <p className=' text-white text-lg mt-5 mb-10 text-center'>
                Add and manage{' '}
                <span className='text-teal-400 font-bold'>Patients</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5'
            >
                {error && (
                    <Error>
                        <p>All Fields are Required</p>
                    </Error>
                )}
                <div className='mb-5'>
                    <label
                        htmlFor='name'
                        className='block uppercase font-bold text-teal-400'
                    >
                        Pet Name:
                    </label>
                    <input
                        type='text'
                        placeholder='Pet Name'
                        id='name'
                        className='w-full border-2 rounded-md p-2 mt-2 placeholderbg-gray-400'
                        value={pet}
                        onChange={(e) => setPet(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='owner'
                        className='block uppercase font-bold text-teal-400'
                    >
                        Owner:
                    </label>
                    <input
                        type='text'
                        placeholder='Owner'
                        id='owner'
                        className='w-full border-2 rounded-md p-2 mt-2 placeholderbg-gray-400'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='phone'
                        className='block uppercase font-bold text-teal-400'
                    >
                        Phone:
                    </label>
                    <input
                        type='tel'
                        placeholder='Owner Phone'
                        id='phone'
                        className='w-full border-2 rounded-md p-2 mt-2 placeholderbg-gray-400'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='date'
                        className='block uppercase font-bold text-teal-400'
                    >
                        Admission Date:
                    </label>
                    <input
                        type='date'
                        placeholder='Owner Phone'
                        id='date'
                        className='w-full border-2 rounded-md p-2 mt-2 placeholderbg-gray-400'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='symptoms'
                        className='block uppercase font-bold text-teal-400'
                    >
                        Symptoms:
                    </label>
                    <textarea
                        id='symptoms'
                        placeholder='Pet Symtoms'
                        className='w-full border-2 rounded-md p-2 mt-2 placeholderbg-gray-400'
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type='submit'
                    value={patient.id ? 'Edit Patient' : 'Add Patient'}
                    className='bg-teal-500 text-white uppercase font-bold w-full rounded-md py-3 hover:bg-teal-400 cursor-pointer active:translate-y-px transition-all shadow-md'
                />
            </form>
        </div>
    );
};

export default Formulario;

const Paciente = ({ paciente, setPatient, deletePatient }) => {
    const { pet, owner, phone, date, symptoms, id } = paciente;

    const handleDelete = () => {
        const resp = confirm('Do you want to remove this patient?');
        if (resp) {
            deletePatient(id);
        }
    };

    return (
        <div className='bg-white px-5 py-10 m-5 shadow-md rounded-md'>
            <p className='font-bold mb-3 uppercase text-teal-400'>
                Pet:{' '}
                <span className='font-normal normal-case text-black'>
                    {pet}
                </span>{' '}
            </p>

            <p className='font-bold mb-3 uppercase text-teal-400'>
                Owner:{' '}
                <span className='font-normal normal-case text-black'>
                    {owner}
                </span>{' '}
            </p>

            <p className='font-bold mb-3 uppercase text-teal-400'>
                Phone:{' '}
                <span className='font-normal normal-case text-black'>
                    {phone}
                </span>{' '}
            </p>

            <p className='font-bold mb-3 uppercase text-teal-400'>
                Admission Date:{' '}
                <span className='font-normal normal-case text-black'>
                    {date}
                </span>{' '}
            </p>

            <p className='font-bold mb-3 uppercase text-teal-400'>
                Symptoms:{' '}
                <span className='font-normal normal-case text-black'>
                    {symptoms}
                </span>{' '}
            </p>

            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    className='bg-amber-400 font-black text-white py-2 px-8 uppercase rounded-md shadow-md hover:bg-amber-300 active:translate-y-px'
                    onClick={() => setPatient(paciente)}
                >
                    Edit
                </button>
                <button
                    type='button'
                    className='bg-red-600 font-black text-white py-2 px-8 uppercase rounded-md shadow-md hover:bg-red-500 active:translate-y-px'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Paciente;

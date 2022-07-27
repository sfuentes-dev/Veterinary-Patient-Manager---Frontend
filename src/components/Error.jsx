const Error = ({ children }) => {
    return (
        <div className='bg-red-600 font-bold text-white text-center py-2.5 mb-5 rounded-md uppercase'>
            {children}
        </div>
    );
};

export default Error;

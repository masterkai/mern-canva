
const Hero = () => {
    return (
        <div className='w-full h-full justify-center items-center p-4'>
            <div className='py-[170px] flex justify-center items-center flex-col gap-6'>
                <h2 className='text-5xl text-[#c7c5c5] font-bold'>What you will design today?</h2>
                <span className='text-[#aca9a9] text-2xl font-medium'>Canva makes it easy to create and share professional designs.</span>
                <button
                    className='py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium'>SingUp
                    for Free
                </button>
            </div>
        </div>
    );
};

export default Hero;

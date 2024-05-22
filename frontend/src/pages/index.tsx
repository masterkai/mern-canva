const MyComponent = () => {
    return (
        <div className='bg-[#18191b] min-h-screen w-full'>
            <div className="bg-[#212223] shadow-md">
                <div className="w-[93%] m-auto py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[80px] h-[48px]">
                            <img
                                className="w-full h-full"
                                src="https://static.canva.com/web/images/856bac30504ecac8dbd38dbee61de1f1.svg"
                                alt="logo"
                            />
                        </div>
                        <div className='flex gap-4'>
                            <button
                                className='py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium'>SingIn
                            </button>
                            <button
                                className='py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium'>SingUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;

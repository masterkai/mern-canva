import { RxCross2 } from "react-icons/rx";

type LogInModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
};

const LogInModal = ({ show, setShow }: LogInModalProps) => {
    return (
        <div
            className={ `w-screen ${ show ? 'visible opacity-30' : 'invisible opacity-30' } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center ` }>
            <div className='w-[350px] m-auto px-6 py-4 rounded-md relative'>
                <div onClick={ () => setShow( false ) }
                     className='absolute right-4 top-4 text-xl cursor-pointer text-white'><RxCross2/></div>
            </div>

        </div>
    );
};

export default LogInModal;

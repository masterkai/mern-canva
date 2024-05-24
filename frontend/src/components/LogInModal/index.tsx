import { RxCross2 } from "react-icons/rx";
import { ChangeEvent } from "react";

type LogInModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    inputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
    state: {
        name: string;
        email: string;
        password: string;
    };
};

const LogInModal = ({ show, setShow, inputHandle, state }: LogInModalProps) => {
    return (
        <div
            className={ `w-screen ${ show ? 'visible opacity-100' : 'invisible opacity-30' } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center ` }>
            <div className='w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative'>
                <div onClick={ () => setShow( false ) }
                     className='absolute right-4 top-4 text-xl cursor-pointer text-white'><RxCross2/></div>
                <h2 className='text-white pb-4 text-center text-xl'>Login and Sign up in seconds</h2>
                <form>
                    <div className='flex flex-col gap-3 mb-3 text-white'>
                        <label htmlFor="email">Email</label>
                        <input onChange={ inputHandle } type="email" name="email" id="email" placeholder='email'
                               value={ state.email }
                               className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'/>
                    </div>

                    <div className='flex flex-col gap-3 mb-3 text-white'>
                        <label htmlFor="password">Password</label>
                        <input onChange={ inputHandle } type="password" name="password" id="password"
                               placeholder='password' value={ state.password }
                               className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'/>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default LogInModal;

import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";
import LogInModal from "../components/LogInModal";


const MyComponent = () => {
    const [show, setShow] = useState( false );
    return (
        <div className='bg-[#18191b] min-h-screen w-full'>
            <LogInModal show={ show } setShow={ setShow }/>
            <Header setShow={setShow}/>
            <Hero/>
        </div>
    );
};

export default MyComponent;

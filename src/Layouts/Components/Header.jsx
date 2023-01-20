import React, { useState } from 'react';
import { Button, Text } from '@mantine/core'
import PDFViewer from './PDFViewer';
import Logo from '../../assets/videos/logoScreen.gif';

function Header() {
    const [view, setView] = useState(false)
    const HandlePDF = (e) => {
        setView(!view);
    }
    return (
        <div className='absolute top-0 left-0 w-screen'>
            <div className='flex justify-between'>
                <div>
                    <img src={Logo} alt="Loading...." className='w-40 h-32'/>
                </div>
                <div className='m-7 lg:m-6'>
                    <Button uppercase variant='filled' className='lg:text-xl' onClick={HandlePDF}>
                        Resume
                    </Button>
                </div>
            </div>
            <div className='w-screen lg:w-1/2 lg:float-right'>
                {view ? <PDFViewer /> : null}
            </div>
        </div>
    )
}

export default Header;
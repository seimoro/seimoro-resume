import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from 'react';


import './style.css'


export const darkModeAtom = atomWithStorage('darkmode', false)

const DarkMode = () => {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    useEffect(() => {
        if (darkMode) {
            document.getElementById('body').classList.add('dark')
        }
        else {
            document.getElementById('body').classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button className='dark-btn' onClick={toggleDarkMode}>

            <span className="slider"></span>

        </button>
    );
}

export default DarkMode;
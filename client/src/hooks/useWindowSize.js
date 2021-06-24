import { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function useWindowSize() {
    const history = useHistory();
    const location = useLocation();

    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    const handleResize = useCallback(() => {
        setWindowSize(getSize);
    }, []);

    const [ windowSize, setWindowSize ] = useState(getSize);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        return history.listen(() => { 
            handleResize();
        }); 
    },[history, handleResize]);

    return windowSize;
}

export default useWindowSize;

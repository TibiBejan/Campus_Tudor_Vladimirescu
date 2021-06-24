import React, { useEffect, useCallback, useMemo, useRef } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import './SmoothScroll.scss';

function SmoothScroll({ children }) {

    // HOOKS
    const size = useWindowSize();

    // REF"S
    const smoothScrollContainer = useRef(null);

    const scrollData = useMemo(() => ({
        ease: 0.2,
        curr: 0,
        prev: 0, 
        rounded: 0,
    }), []);

    const setBodyHeight = () => {
        document.body.style.height = `${smoothScrollContainer.current.getBoundingClientRect().height}px`;
    }

    const smoothScroll = useCallback(() => {
        scrollData.curr = window.scrollY;
        scrollData.prev += (scrollData.curr - scrollData.prev) * scrollData.ease;
        scrollData.rounded = Math.round(scrollData.prev * 100) / 100;
        smoothScrollContainer.current.style.transform = `translate3d(0, -${scrollData.rounded}px, 0)`;

        requestAnimationFrame(() => smoothScroll());
    }, [scrollData]);

    useEffect(() => {
        setBodyHeight();
    }, [size]);

    useEffect(() => {
        requestAnimationFrame(() => smoothScroll());
    }, [smoothScroll]);

    return (
        <div className="smooth-container-wrapper">
            <div className="smooth-container" ref={smoothScrollContainer}>
                { children }    
            </div>   
        </div>
    )
}

export default SmoothScroll;

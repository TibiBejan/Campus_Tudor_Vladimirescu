import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './InitialTransition.scss';
import TuiasiLogo from '../../assets/images/Universities/embleme-tuiasi-rr-1-300x189.png';

const blackBox = {
    initial: {
        height: "100%",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
    exit: {
        height: "100%",
        bottom: 0,
    }
};
  
const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
        duration: 0.3,
        when: "afterChildren",
        },
    },
};
  
const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
        },
    },
};

const InitialTransition = () => {
    useEffect(() => {
        // RESET SCROLL POS ON RENDER
        window.scrollTo(0, 0);
    }, [])
  
    return (
        <motion.div
            className="black-box-wrapper"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={blackBox}
            onAnimationStart={() => document.body.classList.add("overflow-hidden")}
            onAnimationComplete={() =>
                document.body.classList.remove("overflow-hidden")
            }
        >
            <motion.svg variants={textContainer} className="absolute-svg">
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    className="text-white"
                >
                    <rect className="svg-rect" />
                    <motion.rect
                        variants={text}
                        className="svg-rect-anim"
                    />
                </pattern>
                <text
                    className="svg-text"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    style={{ fill: "#fafafa" }}
                >
                    Tudor Vladimirescu
                </text>
            </motion.svg>
        </motion.div>
    );
};

export default InitialTransition;
import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import './FaqBlock.scss';

function FaqBlock({ data, clickEvent, activeIndex, faqIndex }) {
    return (
        <li className="faq-list-item" onClick={clickEvent}>
            <button className="faq-question-block">
                <div className="question-content">
                    <p className={activeIndex === faqIndex ? "question-content-paragraph paragraph-showcase active" : "question-content-paragraph paragraph-showcase"}>{ data.question }</p>
                </div>
                <div className={activeIndex === faqIndex ? "question-icon-wrapper active" : "question-icon-wrapper"}>
                    <IconContext.Provider value={{color: activeIndex === faqIndex ? "#7d7d7d" : "#fafafa", size: '28px'}}>
                        <IoIosArrowDown className="question-icon"/>
                    </IconContext.Provider>
                </div>
            </button>

            {activeIndex === faqIndex ? (
                <AnimatePresence exitBeforeEnter>
                    <motion.div 
                        className="answear-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="answear-block-inner">
                            {data.answear.map((answear, index) => (
                                <p className="answear-block-paragraph paragraph" key={`answear-paragraph-${index}`}>
                                    { answear }
                                </p>
                            ))} 
                        </div>
                    </motion.div>
                </AnimatePresence>
            ) : null}
        </li>
    )
}

export default FaqBlock;

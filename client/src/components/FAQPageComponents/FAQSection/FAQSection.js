import React, { useState } from 'react';
import FaqBlock from '../../SharedComponents/FaqBlock/FaqBlock';
import './FAQSection.scss';

function FAQSection({ sectionData }) {

    // STATE
    const [ activeQuestion, setActiveQuestion ] = useState(false);

    const toggleActive = (index) => {
        if ( activeQuestion === index ) {
            return setActiveQuestion(null);
        }

        setActiveQuestion(index);
    }

    return (
        <section className="faq-section">
            <div className="faq-section-inner">
                <ul className="faq-section-list">
                    {sectionData.map((el, index) => (
                       <FaqBlock
                            key={`faq-block-${index}`} 
                            data={el} 
                            clickEvent={() => toggleActive(index)} 
                            activeIndex={activeQuestion}
                            faqIndex={index}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FAQSection;

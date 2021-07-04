import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DescriptiveShowcase.scss';


const descriptiveData = [
     {
        title: 'Ne ținem aproape de studenții universității',
        label: 'Dorinta',
        description: 'Deși nu am ajuns încă acolo, țintim sus. Vrem ca cel mai mare campus din Iași, să devină și unul dintre cele mai profesionist administrate din țară, să fie recunoscut ca reper în rândul campusurilor studențești din Europa de Est. Lucrând aproape cu studenții, pentru a fi racordați în permanență la nevoile acestora, vrem să le oferim condiții de cazare ireproșabile, servicii de calitate din partea personalului administrativ și să le asigurăm toate facilitățile necesare. Singurul lucru prin care putem face acest lucru este să ne ținem aproape de studenții universității; ei vor avea întotdeauna un cuvânt de spus cu privire la felul în care arată campusul și direcția în care acesta se dezvoltă.',
        image: require('../../../assets/images/StudentServices/student-services-banner-2.jpg')
    },
     {
        title: 'Susținem nevoile studenților.',
        label: 'Devotament',
        description: 'Vrem ca studenții noștri să îmbine într-un mod plăcut învățătura cu distracția și să se simtă bine în campus și ne străduim în permanență pentru asta, muncind în toate lunile din an, fără întrerupere. De la începutul anului universitar, când ne pregătim pentru cazare, dar care continuă pe tot parcursul celor nouă luni de cursuri. Tot noi gestionăm eliberarea abonamentelor RATP, de care beneficiază peste 3000 de studenți în fiecare lună. Pregătim și ședințele Comisiei Sociale, pentru a fi mereu aproape de nevoile studenților. Asigurăm funcționarea și întreținerea întregii rețele de energie și apă curentă din toate cele 21 de cămine, lucru care ne solicită, în condițiile în care campusul are dimensiunile unui oraș în care sunt cazați laolaltă cei mai mulți studenți din toată capitala Moldovei.',
        image: require('../../../assets/images/StudentServices/student-services-banner.png')
    },
    {
        title: 'Oaze de liniște pentru studenți',
        label: 'Amenajare',
        description: 'Cantina și baza sportivă din campus sunt administrate tot de către DSS, detalii despre componența și activitatea lor fiind disponibile în secțiuni separate pe acest site. Un aspect pe care încercăm mereu să-l îmbunătățim este amenajarea spațiului verde din interiorul campusului. Am vrea, în viitor, în funcție bugetul disponibil, să transformăm fiecare zonă cu spațiu verde în oaze de liniște pentru studenți în care aceștia să se plimbe, să citească, să poată practica sporturi sau să stea să se relaxeze în pauzele dintre sau după cursuri.',
        image: require('../../../assets/images/StudentServices/student-services-banner-2.jpg')
    },
]


function DescriptiveShowcase({  scrollPosition }) {

    // STATE    
    const [ activeIndex, setactiveIndex ] = useState(0);

    return (
        <section className="descriptive-showcase-section">
            <div className="descriptive-showcase-section-inner">
                <div className="descriptive-showcase-content">
                    
                    <AnimatePresence initial={false} exitBeforeEnter>
                        <div className="descriptive-showcase-grid" key={activeIndex}>
                        <div className="grid-description">
                            <div className="description-heading-wrapper">
                                <motion.h2 
                                    initial={{ opacity: 0, y: "-100%", transition: 'easeOut', duration: 1.75 }}
                                    animate={{ opacity: 1, y: 0, transition: 'easeOut', duration: 1.75 }}
                                    exit={{ opacity: 0, transition: 'easeOut', duration: 1.75 }}
                                    className="description-title heading-two"
                                >
                                    {descriptiveData[activeIndex].title}
                                </motion.h2>
                            </div>
                            <div className="description-paragraph-wrapper">
                                <motion.p 
                                    initial={{ opacity: 0, y: "100%", transition: 'easeOut', duration: 1.75 }}
                                    animate={{ opacity: 1, y: 0, transition: 'easeOut', duration: 1.75 }}
                                    exit={{ opacity: 0, transition: 'easeOut', duration: 1.75 }}
                                    className="description-paragraph paragraph"
                                >
                                    {descriptiveData[activeIndex].description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="grid-image">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="image-block"
                            >
                                <div className="image-block-overlay"></div>
                                <div className="image-block-showcase">
                                    <LazyLoadImage
                                        alt={descriptiveData[activeIndex].title}
                                        src={descriptiveData[activeIndex].image.default}
                                        effect="blur"
                                        scrollPosition={scrollPosition}
                                        className="background-image"
                                        height={"100%"}
                                    />
                                    {/* <img src={descriptiveData[activeIndex].image.default} alt={descriptiveData[activeIndex].title} className="background-image" /> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    </AnimatePresence>

                    <ul className="descriptive-showcase-list">
                        {descriptiveData.map((block, index) => (
                            <li className="descriptive-showcase-list-item" key={`descriptive-block-${index}`}>
                                <button className={activeIndex === index ? "button-link active" : "button-link"} onClick={() => setactiveIndex(index)}>
                                    <span className="button-link-label label">{block.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(DescriptiveShowcase);

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import MenuCard from '../../SharedComponents/MenuCard/MenuCard';
import './PageMenu.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const menuNav = [
    {
        navLabel: 'Campus',
        navLinks: [
            {
                title: 'About Us',
                path: '/about'
            },
            {
                title: 'Student Services',
                path: '/dss'
            },
            {
                title: 'Latest News',
                path: '/news'
            },
            {
                title: 'Contact Us',
                path: '/contact'
            },
        ]
    },
    {
        navLabel: 'Facilities',
        navLinks: [
            {
                title: 'Cafeteria',
                path: '/cafeteria'
            },
            {
                title: 'Sports Base',
                path: '/sports-base'
            },
            {
                title: 'Residence Halls',
                path: '/residence-halls'
            },
            {
                title: 'Health and Security',
                path: '/health-security'
            },
        ]
    },
    {
        navLabel: 'Students',
        navLinks: [
            {
                title: 'Account',
                path: '/login'
            },
            {
                title: 'Organisations',
                path: '/organisations'
            },
            {
                title: 'Accommodation',
                path: '/accommodation'
            },
            {
                title: 'Tuiasi',
                path: '/tuiasi'
            },
        ]
    },
]

const menuNavCards = [
    {
        label: 'Proiectele comunitatii',
        title: 'Revitalizarea zonei verzi dintre căminele T3 și T4',
        imageName: require(`../../../assets/images/MenuCardsImages/parcela-t3-t4-13-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: '„Centrul civic” al campusului: un amfiteatru în aer liber',
        imageName: require(`../../../assets/images/MenuCardsImages/parc-cezar-oprisan-5.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Chipul lui Gheorghe Asachi creat din siluetele a mii de studenți',
        imageName: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-9-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Centre de consiliere, de învățare și săli de lectură moderne',
        imageName: require(`../../../assets/images/MenuCardsImages/sali-lectura-00005 (1).jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Cea mai tare cameră de cămin primește cazare gratuită tot anul universitar',
        imageName: require(`../../../assets/images/MenuCardsImages/cea-mai-tare-camera-de-camin-6-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Sala de lectură dintre căminele T3 și T4',
        imageName: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
]

function PageMenu({ toggled, handleMenu }) {

    // REF"S
    const menu = useRef(null);

    //EFFECT
    useEffect(() => {

        const fadeMenuIn = () => {
            const tl = gsap.timeline({paused: true, defaults: {duration: 0.5, ease: 'power4.InOut'}});

            tl.to(menu.current, {y: 0});

            return tl;
        }

        const fadeMenuOut = () => {
            const tl = gsap.timeline({paused: true, defaults: {duration: 0.5, ease: 'power4.InOut'}});

            tl.to(menu.current, {y: "-100%"});

            return tl;
        }

        if(toggled.clicked === true) {
            fadeMenuIn().play();
            document.body.style.overflow = 'hidden';
        } else {
            fadeMenuOut().play();
            document.body.style.overflowY = 'scroll';
        }

        return () => {
            document.body.style.overflowY = 'scroll';
        }

    }, [toggled])


    return (
        <div className="page-menu" ref={menu}>
            <div className="page-menu-nav">

                {menuNav.map((el, index) => (
                    <div className="page-menu-nav-block" key={`menu-nav-block-${index}`}>
                        <div className="nav-block-inner">
                            <span className="nav-block-label label">{el.navLabel}</span>
                            <ul className="nav-block-links">
                                {el.navLinks.map((link, index) => (
                                    <li className="nav-block-list-item" key={`nav-list-item-${index}`}>
                                        <Link to={link.path} className="nav-block-link">
                                            <span className="link-label">{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
            <div className="page-menu-showcase">
                <Swiper 
                    slidesPerView={1}
                    breakpoints={{
                        1366: {slidesPerView: 3},
                        650: {slidesPerView: 2}
                    }}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    className="page-menu-showcase-slider"
                >
                    {menuNavCards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Link to="/news/post">
                                <MenuCard data={card} />
                            </Link>
                        </SwiperSlide>  
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PageMenu;

import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Navbar from './HeaderNavbar/Navbar';
import PageMenu from '../PageMenu/PageMenu';
import VerticalOverlay from '../VerticalOverlay/VerticalOverlay';
import Gradient from '../PageGradient/Gradient';

function Header() {
    // STATE
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);
    const [ menuToggled, setMenuToggled ] = useState({
        initial: false,
        clicked: false,
        buttonLabel: 'Menu'
    });
    const history = useHistory();

    // CHECK PAGE SCROLL
    useEffect(() => {
        const checkScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    useEffect(() => {
        history.listen(() => {
            setMenuToggled({
                clicked: false,
                buttonLabel: 'Menu'
            })
        })
    }, [history]);

    // FUNCTION TO HANDLE TOGGLED EVENT
    const handleToggledMenu = () => {
        handleDisabled();
        if(menuToggled.initial === false) {
            setMenuToggled({
                initial: null,
                clicked: true,
                buttonLabel: 'Close Menu'
            });
        } else if (menuToggled.clicked === false) {
            setMenuToggled({
                clicked: true,
                buttonLabel: 'Close Menu'
            });
        } else {
            setMenuToggled({
                clicked: false,
                buttonLabel: 'Menu'
            });
        }
    }

    // TIMEOUT TO DISABLE TOGGLED BUTTON ON CLICK
    const handleDisabled = () => {
        setDisabled(prevState => !prevState);
        setTimeout(() => {
            setDisabled(false);
        }, 750);
    }

    return (
        <header>
            <Gradient />
            <VerticalOverlay toggled={menuToggled}/>
            <Navbar disabled={disabled}  toggled={menuToggled} handleMenu={handleToggledMenu} scroll={isScrolled}/>
            <PageMenu toggled={menuToggled} handleMenu={handleToggledMenu} />
        </header>
    )
}

export default withRouter(Header);

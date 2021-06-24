import React from 'react';
import PreviewCard from '../PreviewCard/PreviewCard';
import './FacilitiesPreview.scss';

const cardsData = [
    {
        id: 1,
        path: '/cafeteria',
        label: 'Tudor Vladimirescu',
        title: 'Cantina',
        image: require(`../../../assets/images/Cantina/cantina-1-min.jpg`)
    },
    {
        id: 2,
        path: '/sports-base',
        label: 'Tudor Vladimirescu',
        title: 'Baza Sportivă',
        image: require(`../../../assets/images/BazaSportiva/baza-sportiva-00009.jpg`)
    },
    {
        id: 3,
        path: '/health-security/counseling-center',
        label: 'Tudor Vladimirescu',
        title: 'Centru de consiliere',
        image: require(`../../../assets/images/SalaLectura/sali-lectura-00010.jpg`)
    },
]

function FacilitiesPreview() {
    return (
        <section className="facilities-preview">
            <div className="facilities-preview-inner">

                {cardsData.map(card => (
                    <PreviewCard cardData={card} key={`preview-card-${card.id}`} />
                ))}
                
            </div>            
        </section>
    )
}

export default FacilitiesPreview;

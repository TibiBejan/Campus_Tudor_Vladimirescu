import React from 'react';
import NewsCard from '../../SharedComponents/NewsCard/NewsCard';
import './CardsSection.scss';

function CardsSection({ cardsData }) {
    return (
        <section className="cards-section">
            <div className="cards-section-inner">

                {cardsData.map(card => (
                    <NewsCard cardData={card} key={`news-card-${card.id}`}/>
                ))}

            </div>
        </section>
    )
}

export default CardsSection;

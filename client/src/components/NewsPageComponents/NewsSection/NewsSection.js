import React from 'react';
import NewsCard from '../../SharedComponents/NewsCard/NewsCard';
import './NewsSection.scss';

const cardsData = [
    {
        id: 1,
        path: '/news/post',
        date: '26 Mai 2021',
        title: 'Revitalizarea zonei verzi dintre căminele T3 și T4',
        description: 'Vrem că în anii următori tot campusul să fie un loc verde, cu spații amenajate în care să-ți petreci timpul vara, pe unde să poți să te plimbi fără să porți grija mașinilor.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
    {
        id: 2,
        path: '/news/post',
        date: '26 Mai 2021',
        title: '„Centrul civic” al campusului: un amfiteatru în aer liber',
        description: 'Visul asumat al universității noastre este acela de a transforma campusul într-o zonă liberă de mașini, cu spații verzi în care toți studenții să-și poată petrece zilele călduroase de primăvară, vară și toamnă.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/parc-cezar-oprisan-5.jpg`)
    },
    {
        id: 3,
        path: '/news/post',
        date: '26 Mai 2021',
        title: 'Chipul lui Gheorghe Asachi creat din siluetele a mii de studenți',
        description: 'Direcția Servicii Studențești a dorit implicarea studenților în cât mai multe dintre proiectele care și-au propus remodelarea spațiilor verzi din campus, dar a existat și un proiect foarte interesant, în care aceștia au contribuit la reproiectarea spațiilor interioare ale universității.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
    {
        id: 4,
        path: '/news/post',
        date: '26 Mai 2021',
        title: 'Centre de consiliere, de învățare și săli de lectură moderne',
        description: 'Redarea zonelor de spațiu verde în campus prin diverse proiecte de revitalizare urbană este doar un pas din „masterplanul” nostru de a vă oferi cele mai bune condiții pentru cei patru ani (cel puțin!) pe care o să-i petreceți în cămin.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/sali-lectura-00005 (1).jpg`)
    },
] 

function NewsSection() {
    return (
        <section className="news-section">
            <div className="news-section-inner">

                {cardsData.map(card => (
                    <NewsCard cardData={card} key={`news-card-${card.id}`}/>
                ))}

            </div>
        </section>
    )
}

export default NewsSection;

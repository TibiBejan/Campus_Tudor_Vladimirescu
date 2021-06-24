import React from 'react'; 
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary';
import './DescriptiveList.scss';

function DescriptiveList({ sectionData }) {
    return (
        <section className="descriptive-list-section">
            <div className="descriptive-list-section-inner">

                <div className="descriptive-inner-image">
                    <div className="image-block">
                        <div className="image-block-overlay"></div>
                        <div className="image-block-showcase">
                            <img src={sectionData.image.default} alt={sectionData.imageAlt} className="background-image" />
                        </div>
                    </div>
                </div>

                <div className="descriptive-inner-content">
                    <div className="content-heading-wrapper">
                        <span className="content-heading-subtitle label-medium">{sectionData.subtitle}</span>
                        <h2 className="content-heading-title heading-two">{sectionData.title}</h2>
                    </div>
                    <div className="content-paragraph-wrapper">
                        <p className="content-paragraph paragraph">{sectionData.paragraph}</p>
                    </div>
                    <ul className="content-descriptive-list">
                        {sectionData.listItemsLabels.map((listItem, index) => (
                            <li className="descriptive-list-item" key={`descriptive-list-item-${index}`}>
                                <p className="list-item-label paragraph">{listItem}</p>
                            </li>
                        ))}
                    </ul>
                    {sectionData.buttonLabel && (
                        <Link to="" className="link-wrapper">
                            <ButtonPrimary textLabel={sectionData.buttonLabel} />
                        </Link>
                    )}
                </div>

            </div>
        </section>
    )
}

export default DescriptiveList;

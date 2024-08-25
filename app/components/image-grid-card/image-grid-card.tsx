import React from 'react';
import Image from "next/image";

interface ImageData {
    id: number;
    title: string;
    imageUrl: string;
    icon: string;
  }

interface ImageGridCardProps {
    data: ImageData[];
}

const imageGridCard: React.FC<ImageGridCardProps> = ({ data = [] }) => {
    return (
        <section className="ozgs-image-grid-card">
            <div className="ozgs-image-grid-card__wrapper">
                <div className="ozgs-image-grid-card__grid">
                    {data.map(item => (
                        <div key={item.id} className="ozgs-image-grid-card__grid-item">
                            <Image src={item.imageUrl} alt={item.title} width={290} height={250}/>
                            <div key={item.id} className="ozgs-image-grid-card__grid-item--content">
                                <div className="badge">
                                    <i className={item.icon}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>here generate two line text about service</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default imageGridCard;
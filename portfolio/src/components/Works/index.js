import React from "react";
import "./index.scss";
import portfolioData from '../../data/works.json';

const Works = () => {
    console.log(portfolioData)

    const renderWorks = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="work-obj" key={idx}>
                            <img 
                            src={port.cover}
                            className="cover-image"
                            alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <>
            <div className='container works-page'>
                <div className='text-zone-full'>
                    <h1>
                        Works
                    </h1>
                    <div>{renderWorks(portfolioData.works)}</div>
                </div>
            </div>
        </>
    );
}

export default Works;
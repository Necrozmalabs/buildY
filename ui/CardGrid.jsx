import React from 'react';
import '../styles/CardGrid.css'; // Link to a CSS file for styling

const Card = ({ gif, title, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-content">
          <div className="image-container" style={{ backgroundColor: 'white' }}>
            <img src={gif} alt="Card Thumbnail" className="card-image" />
          </div>
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const CardGrid = ({ tag }) => {
  console.log('Received tag:', tag);

  const cards = [
    {
      gif: '.....',
      title: 'Dyson Swarm around Mars as an Energy Source',
      link: '/techs/dyson-swarm-around-mars-as-an-energy-source/',
      tags: ['energy', 'inventions', 'space'],
    },]
  
  

  // Filter cards based on the tag
  const filteredCards = tag === 'all' ? cards : cards.filter((card) => card.tags.includes(tag));

  return (
    <div className="card-grid">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => <Card key={index} {...card} />)
      ) : (
        <p style={{ padding: '32px' }}>Nothing here</p>
      )}
    </div>
  );
};

export default CardGrid;

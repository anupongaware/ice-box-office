import React from 'react';
import { Link } from 'react-router-dom';
import { Star, StyledCard } from '../styled';

const ShowCard = ({ id, name, image, summary, onStartClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <StyledCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>
      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={onStartClick}>
          <Star active={isStarred}/>
        </button>
      </div>
    </StyledCard>
  );
};

export default ShowCard;

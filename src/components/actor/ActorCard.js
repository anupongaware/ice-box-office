import React from 'react';
import { StyledCard } from '../styled';

const ActorCard = ({ name, country, birthday, deadthday, gender, image }) => {
  return (
    <StyledCard>
      <div div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : `No country known`}</p>
      {birthday ? <p>Born {birthday} </p> : null}
      <p>{deadthday ? `Died ${deadthday}` : 'Alive'}</p>
    </StyledCard>
  );
};

export default ActorCard;

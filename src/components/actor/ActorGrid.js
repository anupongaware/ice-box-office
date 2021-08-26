import React from 'react';
import ActorCard from './ActorCard';
import imgNotFound from '../../assets/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deadthday={person.deadthday}
          gender={person.gender}
          image={person.image ? person.image.medium : imgNotFound}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;

import React from 'react';
import styled from 'styled-components';


const Card = ({user, className}) => {
  return (
    <div className={className}>
      <h1>{user.name}</h1><br/>
      {user.address.city}
      <hr/>
    </div>
  )
};

const StyledCard = styled(Card)`
  margin:1em;
  padding:1em;
  display: inline-block;
  background-color: papayawhip;
  max-width: 375px;
`;


export default StyledCard;

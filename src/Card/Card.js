import React from 'react';
import styled from 'styled-components';
import ExpandedView from '../ExpandedView/ExpandedView';

const CardImage = ({img, className}) => {
  return (
    <div className={className}>
      <img src={img}/>
    </div>
  )
};



const StyledCardImage = styled(CardImage)`
  text-align:center;
`;

const Rating = ({rating, className}) => {

      let stars = []
      for (let i = 0; i < rating; i++) {
        stars.push(
          <span>* </span>
        )
      }

  return (
    <div className={className}>
      {stars}
    </div>
  )
};

const StyledRating = styled(Rating)`
  text-align:center;
`;

const Card = ({openModal, user, className}) => {
  return (
    <div className={className}>
      <StyledCardImage img="https://via.placeholder.com/250"/>
      <h3>{user.name}</h3>
      {user.address.city}
      <hr/>
      <StyledRating rating={user.rating}/>
      <button onClick={openModal}>CLICK</button>
    </div>
  )
};

const StyledCard = styled(Card)`
  margin:1em;
  padding:1em;
  display: inline-block;
  background-color: papayawhip;
  width: 275px;
  min-height:370px;
  > h3 {
    text-align:center;
  }
`;


export default StyledCard;

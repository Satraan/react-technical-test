import React from 'react';
import styled from 'styled-components';
import ExpandedView from '../ExpandedView/ExpandedView';
import { FaHome, FaStar, FaChevronRight } from 'react-icons/fa';

const CardImage = ({img, className}) => {
  return (
    <div className={className}>
      <img src={img}/>
    </div>
  )
};

const StyledCardImage = styled(CardImage)`
  text-align:center;
  > img {
    border: black solid 2px;
  }
`;

const Rating = ({rating, className}) => {
      let stars = []
      for (let i = 0; i < rating; i++) {
        stars.push(
          <FaStar />
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

const StyledButton = styled.button`

`;

const Card = ({expandProfile, user, className}) => {
  return (
    <div className={className}>
      <StyledCardImage img={user.avatar}/>
      <h3>{user.name}</h3>
      <FaHome /> {user.address.city}
      <hr/>
      <StyledRating rating={user.rating}/>

      <button onClick={expandProfile} data-userkey={user.id}> See More <FaChevronRight/> </button>
    </div>
  )
};

const StyledCard = styled(Card)`
  margin:1em;
  padding:1em;
  display: inline-block;
  background-color: #59a0ee9c;
  -webkit-box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  -moz-box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  width: 275px;
  min-height:370px;
  > h3 {
    text-align:center;
  }
`;


export default StyledCard;

import React from 'react';
import styled from 'styled-components';
import ExpandedView from '../ExpandedView/ExpandedView';
import { FaHome, FaStar, FaChevronCircleRight } from 'react-icons/fa';

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
  margin-bottom: 0.5em;
`;

const StyledButton = styled.button`
  background:transparent;
  border-radius:5px;
  border:none;
  float:right;
  font-size:1.5em;
  line-height:1em;
  padding:0.25em;
  &:focus{
    outline:0;
  }
  &:hover{
    opacity:0.5;
  }
  > svg {
    vertical-align:middle;
  }
`;

const StyledCity = styled.div`
  float:left;
  bottom:0;
  font-size:1.5em;
  > svg, span {
    vertical-align:middle;
  }
  > span {
    font-size:0.85em;
  }
`;



const Card = ({expandProfile, user, className}) => {
  return (
    <div className={className}>
      <StyledCardImage img={user.avatar}/>
      <h3>{user.name}</h3>
      <hr/>
      <StyledRating rating={user.rating}/>
      <StyledCity>  <FaHome /> <span>{user.address.city}</span></StyledCity>
      <StyledButton onClick={() => expandProfile(user.id)}> <FaChevronCircleRight /> </StyledButton>
    </div>
  )
};

const StyledCard = styled(Card)`
  margin:1em;
  padding:1em;
  display: inline-block;
  background-color: #aad2fd;
  -webkit-box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  -moz-box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  box-shadow: 6px 4px 5px 0px rgba(125,124,125,0.64);
  width: 275px;
  min-height:370px;
  > h3 {
    text-align:center;
  }
  > hr {
    border-color:#00000091;
  }
`;


export default StyledCard;

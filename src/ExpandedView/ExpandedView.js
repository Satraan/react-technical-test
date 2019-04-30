import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaHome } from 'react-icons/fa';

const StyledText = styled.div`
  display:inline-block;
  text-align:center;
  width:100%;
  @media (min-width: 768px) {
    float:left;
    width:65%;
  }
`;

const StyledList = styled.ul`
  text-align:center;
  padding-left:0;
  margin:0;
  list-style:none;
  width:100%;
  @media (min-width: 768px) {
    float:right;
    width:25%;
  }
  > svg {
    font-size: 18px;
    margin-right:0.25em;
  }
`;



const ExpandedView = ({user, className}) => {
  return (
    <div className={className}>
      <h2>{user.name}</h2>
      <hr/>
      <StyledText>
        <b>More about me</b><br/>
        {user.bio}
      </StyledText>
      <StyledList>
        <br/>
        <li> <FaHome/> <b>My address</b></li>
        <li>{user.address.street}</li>
        <li>{user.address.suite}</li>
        <li>{user.address.city}</li>
        <li>{user.address.zipcode}</li>
      </StyledList>

      <StyledText>
        <br/>
        <b>Who I work for</b> <br/>
        {user.company.name}
        <br/> {user.company.catchPhrase}
      </StyledText>

      <StyledList>
        <br/>
        <li> <FaPhone/> <b>Contact info</b></li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
      </StyledList>

    </div>
  )
};

const StyledExpandedView = styled(ExpandedView)`
  background-color:#aad2fd;
  max-width:600px;
  > hr {
    border-color:#00000091;
    margin-bottom:1em;
  }
`;

export default StyledExpandedView;

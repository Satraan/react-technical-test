import React from 'react';
import styled from 'styled-components';

const ExpandedView = ({user, className}) => {
  return (
    <div className={className}>
      <h3>{user.name}</h3>
      <hr/>
      <p>
        {user.address.street}
        <br/> {user.address.suite}
        <br/> {user.address.city}
        <br/> {user.address.zipcode}
      </p>

      
    </div>
  )
};

const StyledExpandedView = styled(ExpandedView)`
  > h3 {
  }
`;

export default StyledExpandedView;

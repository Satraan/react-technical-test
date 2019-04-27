import React from 'react';
import styled from 'styled-components';

const ExpandedView = ({user, className}) => {
  return (
    <div className={className}>
      HI
    </div>
  )
};

const StyledExpandedView = styled(ExpandedView)`
  width:100%;
  height:100%;
  background-color: red;
`;

export default StyledExpandedView;

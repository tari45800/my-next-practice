import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  border: 0.2rem solid green;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>푸터입니당</h1>
    </FooterContainer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  padding: 2rem 5rem;

  border-bottom: 0.1rem solid var(--tabs-color);
  background-color: var(--cover-color);

  .link {
    color: var(--tabs-color);
    text-decoration-line: none;
  }

  .title {
    font-family: serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link className="link" href={`/`}>
        <div className="title">
          <div>SSEDU</div>
          <div>ACADEMY</div>
        </div>
      </Link>

      <Link className="link" href={`/TSpages/AdminApplicationPage`}>
        <div>접수 관리 페이지</div>
      </Link>
    </HeaderContainer>
  );
};

export default Header;

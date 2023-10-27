import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  background-color: var(--cover-color);

  .nav-box {
    flex: 1;
    padding: 2rem;
    color: var(--dark-color);
    border-top: 0.1rem solid var(--tabs-color);
    border-left: 0.1rem solid var(--tabs-color);
    cursor: pointer;
    transition: 0.5s;
  }
  .nav-box:hover {
    border-top: 0.3rem solid var(--tabs-color);
  }

  .nav-box:hover ~ .current-page {
    border-top: 0.1rem solid var(--tabs-color);
  }

  .current-page {
    border-top: 0.3rem solid var(--tabs-color);
  }
`;

const Nav = ({ currentPage }) => {
  return (
    <Container>
      <Link
        className={`link nav-box ${currentPage === 1 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>SSEDU Academy</div>
      </Link>
      <Link
        className={`link nav-box ${currentPage === 2 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>Management</div>
      </Link>
      <Link
        className={`link nav-box ${currentPage === 3 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>Consulting</div>
      </Link>
      <Link
        className={`link nav-box ${currentPage === 4 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>Program</div>
      </Link>
      <Link
        className={`link nav-box ${currentPage === 5 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>Community</div>
      </Link>
      <Link
        className={`link nav-box ${currentPage === 6 && "current-page"}`}
        href={`/TSpages/ApplicationCategoryPage`}
      >
        <div>Application</div>
      </Link>
    </Container>
  );
};

export default Nav;

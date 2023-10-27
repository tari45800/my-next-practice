import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ApplicationCategory from "@/components/ApplicationCategory";
import Nav from "./Nav";

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  padding: 7rem;
  background: linear-gradient(45deg, #d6d2c9, #d6d2c9, #fefefe);
`;

const ContentBox = styled.div`
  display: flex;
  font-size: 1.5rem;

  .letter-box {
    flex: 2;
    padding: 5rem;

    div:nth-of-type(1) {
      font-size: 4rem;
      font-weight: bolder;
      line-height: 5rem;
      margin-bottom: 2rem;
    }
  }

  .nav-box {
    flex: 3;
    padding: 5rem;
  }
`;

const AdminApplicationPage = () => {
  return (
    <>
      <Container>
        <Header></Header>

        <ContentBox>
          <div className="letter-box">
            <div>관리자 접수 폼입니다.</div>
            <div>잘 관리해주세요.</div>
            <div>부탁입니다.</div>
          </div>
          <div className="nav-box">
            <ApplicationCategory
              link={"/TSpages/applicationlistpage/"}
            ></ApplicationCategory>
          </div>
        </ContentBox>
        <Nav></Nav>
      </Container>
    </>
  );
};

export default AdminApplicationPage;

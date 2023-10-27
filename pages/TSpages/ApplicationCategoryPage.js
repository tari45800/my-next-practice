import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import ApplicationCategory from "@/components/ApplicationCategory";

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

    .title {
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

const ApplicationCategoryPage = () => {
  return (
    <Container>
      <Header></Header>
      <ContentBox>
        <div className="letter-box">
          <div className="title">전문적인 맞춤형 과정이 기다리고 있습니다.</div>
          <div>지금 당장 지금 당장 지금 당장 지금 당장 클릭하세요.</div>
          <div>전문적인 맞춤형 과정이 기다리고 있습니다.</div>
        </div>
        <div className="nav-box">
          <ApplicationCategory
            link={"/TSpages/applicationpage/"}
            mode={"popup"}
          ></ApplicationCategory>
        </div>
      </ContentBox>
      <Nav currentPage={6}></Nav>
    </Container>
  );
};

export default ApplicationCategoryPage;

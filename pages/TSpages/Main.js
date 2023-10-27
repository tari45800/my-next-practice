import Link from "next/link";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: linear-gradient(45deg, #6f1d1d, #6f1d1d, #d8d1be);
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 5rem;

  .link {
    color: white;
    text-decoration-line: none;
  }

  .header {
    flex: 1;
    display: flex;
    align-items: start;

    font-family: serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .content {
    flex: 5;
    display: flex;
  }

  .letter-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-size: 1.5rem;

    div:nth-of-type(1) {
      font-family: serif;
      font-size: 14rem;
    }
    div:nth-of-type(2) {
      font-family: serif;
      font-size: 9rem;
      line-height: 0rem;
      margin-bottom: 5rem;
    }
  }

  .nav-box {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 1rem;

    .column-box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .box {
      border: 1px solid rgba(255, 255, 255, 0.2);
      width: 22rem;
      height: 12rem;
      padding: 1.5rem;

      display: flex;
      flex-direction: column;
      justify-content: end;

      font-size: 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      transition: 0.5s;
      cursor: pointer;
    }

    .box:hover {
      background-color: #701e1e;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <div className="header">
        <div>
          <div>SSEDU</div>
          <div>ACADEMY</div>
        </div>
      </div>

      <div className="content">
        <div className="letter-box">
          <div>SSEDU</div>
          <div>ACADEMY</div>
          <div>
            대치 투에스에듀 아카데미는 학생들에게 '성공DNA를 심어주는
            집단'입니다.
          </div>
          <div>
            대한민국 최고의 교육 전문가, 입시 컨설턴트, 그리고 일타 강사진이
            제공하는
          </div>
          <div>
            '최적의 입시 로드맵'을 거쳐 명문대에서 인생 2막을 시작하세요.
          </div>
          <div>
            입시의 새로운 기준을 제시하는 투에스에듀는 실력을 기반으로 결과를
            증명합니다.
          </div>
        </div>
        <div className="nav-box">
          <div className="column-box">
            <div className="box">
              <div>SSEDU</div>
              <div>Academy</div>
            </div>
            <div className="box">Consulting</div>
            <div className="box">Community</div>
          </div>

          <div className="column-box">
            <div className="box">Management</div>
            <div className="box">Program</div>
            <Link className="link" href={`TSpages/ApplicationCategoryPage`}>
              <div className="box">Application</div>
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;

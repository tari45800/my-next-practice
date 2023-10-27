import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .table-box {
    display: flex;
  }

  .column {
    padding: 0.5rem;
  }

  .column-name {
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid var(--outline-color);
  }

  .column-data {
    border: 1px solid var(--outline-color);
  }
`;

const ApplicationTable = ({ formArray, dbData }) => {
  // 테이블 양식을 리턴하는 함수
  const createTable = (el, dbData) => {
    return (
      <div className="" key={el.info.label}>
        {/* 어레이 컬럼명 */}
        <div className="column column-name">{el.info.label}</div>

        {/* 파이어베이스 데이터 */}
        {dbData.map((doc) => {
          return (
            <div className="column column-data" key={doc.id}>
              <div>{doc.data()[el.info.name] || "x"}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Container>
      <h1>{formArray && formArray[0]}</h1>
      <div className="table-box">
        {formArray &&
          formArray.map((el) => {
            // 폼 양식이 아니라면 건너뛰는 코드
            if (typeof el === "string") {
              return;
            }

            return (
              <>
                {el.map((arrEl) => {
                  // 라디오 중복 방지
                  if (Array.isArray(arrEl)) {
                    arrEl = arrEl[0];
                  }
                  return createTable(arrEl, dbData);
                })}
              </>
            );
          })}
      </div>
    </Container>
  );
};

export default ApplicationTable;

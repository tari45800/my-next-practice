import handler from "@/pages/api/hello";
import React, { useState } from "react";
import styled from "styled-components";
import { elRegex } from "@/pages/formobjects/regex";

const Container = styled.div`
  font-size: 1rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 46vw;

  padding: 2rem;
  border: 1px solid var(--outline-color);
  border-radius: 0.5rem;

  .red {
    color: red;
  }
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;

  .input-nav {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid var(--tabs-color);
  }

  .current {
    background-color: var(--tabs-color);
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  input {
    width: 20vw;
    height: 3rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding: 0.3rem;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    width: 20vw;
    display: inline-block;
    padding: 0.5rem;
    border: 1px solid var(--outline-color);
    border-radius: 0.2rem;
    cursor: pointer;
    transition: 0.5s;
  }

  input[type="radio"]:checked + label {
    background-color: rgba(113, 30, 30, 0.2);
  }

  .radio-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ApplicationInput = ({ formArray, errors, register }) => {
  const [pagination, setPagination] = useState(1);

  // 인풋폼을 제사용하기 위한 함수
  const createInput = (el, idx) => {
    return (
      <div key={`${el.info.name + idx}`}>
        {/* 인풋창 제목 */}
        <div>
          {el.info.label}
          {/* 필수 항목 표기 */}
          <span>{el.info.label && el.data.required && "*"}</span>
        </div>

        <input
          // 라디오 버튼의 값 때문에 넣었다.
          value={el.info.value}
          placeholder={el.info.placeholder}
          type={el.info.type}
          id={el.info.value}
          // 이름을 등록
          {...register(
            el.info.name,
            // 필수문항, 정규식, 애러메시지
            el.data
          )}
        />

        {/* 라디오 버튼의 값 때문에 넣었다. */}
        <label htmlFor={el.info.value}>{el.info.value}</label>

        {/* 에러매시지 */}
        <div className="red">{errors[el.info.name]?.message}</div>
      </div>
    );
  };

  // 페이지 버튼
  const handlePage = (num) => {
    if (num === -1 && pagination <= 1) {
      console.log("마이너스");
      return;
    }

    if (num === 1 && pagination >= formArray.length - 1) {
      console.log("플러스");
      return;
    }
    setPagination(pagination + num);
  };

  return (
    <Container>
      <NavBox>
        {formArray &&
          formArray.map((el, idx) => {
            if (typeof el === "string") {
              return;
            }

            return (
              <span
                key={idx}
                className={`input-nav ${idx <= pagination && "current"}`}
              ></span>
            );
          })}
      </NavBox>
      <ContentBox>
        <InputBox>
          {
            // 입력양식을 map으로 돌려서 작성폼을 완성합니다.
            formArray &&
              formArray[pagination].map((el, idx) => {
                // 폼 양식이 아니라면 건너뛰는 코드
                if (typeof el === "string") {
                  return;
                }

                // 라디오 박스
                if (Array.isArray(el)) {
                  return (
                    <div className="radio-box">
                      {el.map((arrEl, arrIdx) => {
                        return createInput(arrEl, arrIdx);
                      })}
                    </div>
                  );
                }

                // 문자열을 정규식으로 변환하는 코드
                elRegex(el);

                // 폼 양식을 리턴하는 함수
                return createInput(el, idx);
              })
          }
        </InputBox>

        <ButtonBox>
          {pagination >= 2 && (
            <button
              onClick={() => {
                handlePage(-1);
              }}
            >
              이전
            </button>
          )}
          <button
            onClick={() => {
              handlePage(1);
            }}
          >
            다음
          </button>
        </ButtonBox>
      </ContentBox>
    </Container>
  );
};

export default ApplicationInput;

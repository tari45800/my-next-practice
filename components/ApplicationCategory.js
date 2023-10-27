import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { winterSchoolForm } from "@/pages/formobjects/\bwinterSchoolForm";
import { finalForm } from "@/pages/formobjects/finalForm";
import { regularForm } from "@/pages/formobjects/regularForm";
import { onlineForm } from "@/pages/formobjects/onlineForm";
import { absorbedForm } from "@/pages/formobjects/absorbedForm";
import { selfStudyForm } from "@/pages/formobjects/selfStudyForm";
import ApplicationPopup from "@/pages/TSpages/ApplicationPopup";

const Container = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .category-box {
    display: flex;
    flex-direction: column;

    // 반응형으로 수정하세요
    width: 22rem;
    height: 12rem;
    padding: 1.5rem;
    font-size: 1.5rem;

    color: var(--dark-color);
    background-color: rgba(255, 255, 255, 0.2);
    //var(--outline-color)
    border: 0.1rem solid rgb(214, 211, 202);
    transition: 0.5s;
    cursor: pointer;
  }

  .category-box:hover {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 3px;
  }
`;

const ApplicationCategory = ({
  link = "/TSpages/applicationpage/",
  mode = "page",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [categoryNum, setCategoryNum] = useState(0);

  // 접수 양식을 담고 있는 배열
  const formArray = [
    winterSchoolForm,
    finalForm,
    regularForm,
    onlineForm,
    absorbedForm,
    selfStudyForm,
  ];

  const handlePopup = (idx) => {
    setIsVisible(true);
    setCategoryNum(idx);
  };

  return (
    <Container>
      {formArray.map((el, idx) => {
        return mode === "page" ? (
          // 페이지로 사용할 때
          <Link
            className="link"
            // 링크로 배열 옮기기(직렬화)
            href={`${link}${encodeURIComponent(JSON.stringify(el))}`}
            key={idx}
          >
            <h1 className="category-box">{el[0]}</h1>
          </Link>
        ) : (
          <>
            {/* 팝업으로 사용할 때 */}
            <h1
              className="category-box"
              key={idx}
              onClick={() => {
                handlePopup(idx);
              }}
            >
              {el[0]}
            </h1>
            {isVisible && categoryNum === idx && (
              <ApplicationPopup
                key={idx}
                formArray={el}
                setIsVisible={setIsVisible}
              ></ApplicationPopup>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default ApplicationCategory;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { db } from "@/pages/Firebase";
import { collection, setDoc, getDocs, doc } from "firebase/firestore/lite";
import ApplicationInput from "@/components/ApplicationInput";
import Header from "../Header";
import Nav from "../Nav";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: auto;
  width: 100vw;

  color: #210909;
  background: linear-gradient(
    45deg,
    var(--cover-color),
    var(--cover-color),
    var(--light-color)
  );
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ApplicationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formArray, setFormArray] = useState(null);

  // useForm 라이브러리
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // mode: "onBlur",
  });

  // submit 함수
  const onSubmit = (data) => {
    addData(data);
    alert("접수가 완료되었습니다.");
    window.location.reload();
  };

  // firebase 데이터 가지고 오는 함수
  const addData = async (data) => {
    // 해당 접수 명단을 들고오는 함수
    const query = await getDocs(collection(db, formArray[0]));

    // 접수 명단에 정보를 저장하는 함수
    await setDoc(
      // query.docs 독스에 데이터가 들어가 있습니다.
      doc(db, formArray[0], `student${Object.keys(query.docs).length + 1}`),
      data
    );
  };

  // 가져온 폼 양식 정보를 파싱하는 코드
  useEffect(() => {
    if (id) {
      try {
        const parsedFormArray = JSON.parse(id);
        setFormArray(parsedFormArray);
      } catch (error) {
        console.error("파싱 오류:", error);
      }
    }
  }, [id]);

  return (
    <>
      <Header></Header>
      <Container>
        <ContentBox>
          <div className="title">{formArray && formArray[0]}</div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <ApplicationInput
              formArray={formArray}
              errors={errors}
              register={register}
            />
          </form>

          <button onClick={handleSubmit(onSubmit)}>제출하기</button>
        </ContentBox>
      </Container>
      <Nav></Nav>
    </>
  );
};

export default ApplicationPage;

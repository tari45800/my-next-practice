import styled from "styled-components";
import { useForm } from "react-hook-form";
import { db } from "@/pages/Firebase";
import { collection, setDoc, getDocs, doc } from "firebase/firestore/lite";
import ApplicationInput from "@/components/ApplicationInput";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  color: #210909;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 4rem 14rem;
  width: 70vw;
  max-height: 80vh;
  overflow-y: auto;
  background: linear-gradient(
    45deg,
    var(--cover-color),
    var(--cover-color),
    var(--light-color)
  );

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ApplicationPopup = ({ formArray, setIsVisible }) => {
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
  const onSubmit = async (data) => {
    // alert(JSON.stringify(data));
    await addData(data);
    alert("접수가 완료되었습니다.");
    await window.location.reload();
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

  const containerRef = useRef();

  const handleContainerClick = (e) => {
    if (containerRef.current === e.target) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Container ref={containerRef} onClick={handleContainerClick}>
        <ContentBox>
          <div className="title">{formArray && formArray[0]}</div>

          <form
            onSubmit={(e) => {
              // 기본 제출 동작을 막습니다.
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
    </>
  );
};

export default ApplicationPopup;

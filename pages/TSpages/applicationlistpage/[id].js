import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import { db } from "@/pages/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import ApplicationTable from "@/components/ApplicationTable";
import Nav from "../Nav";

const Container = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 50vw;
  }

  input {
    padding: 1rem;
    outline: none;
  }

  .red {
    color: red;
  }
`;

const ApplicationListPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formArray, setFormArray] = useState(null);
  const [dbData, setDbData] = useState([]);

  // 쿼리로 받아온 배열을 파싱하는 코드
  useEffect(() => {
    if (id) {
      try {
        const parsedEl = JSON.parse(id);
        setFormArray(parsedEl);
      } catch (error) {
        // 파싱 오류 처리
        console.error("파싱 오류:", error);
      }
    }
  }, [id]);

  // 받아온 쿼리 데이터로 파이어베이스 데이터를 가져오는 코드
  useEffect(() => {
    if (!formArray) {
      return;
    }
    const getData = async () => {
      try {
        const query = await getDocs(collection(db, formArray[0]));

        // // 데이터 지정
        // // query가 application이고
        // //  doc
        // //    doc.id가 각 객체를 가리키는 이름
        // //    doc.data()가 각 객체
        await setDbData(query.docs);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };
    getData();
  }, [formArray]);

  return (
    <>
      <Header></Header>
      <Container>
        <ContentBox>
          <div className="tableContainer">
            <ApplicationTable
              formArray={formArray}
              dbData={dbData}
            ></ApplicationTable>
          </div>
        </ContentBox>
      </Container>
      <Nav></Nav>
    </>
  );
};

export default ApplicationListPage;

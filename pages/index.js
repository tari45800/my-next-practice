import styled from "styled-components";
import Main from "./TSpages/Main";
import Head from "next/head";

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SSEDU ACADEMY</title>
        <meta name="description" content="SSEDU ACADEMY." />
      </Head>

      <HomeContainer>
        <Main></Main>
      </HomeContainer>
    </>
  );
}

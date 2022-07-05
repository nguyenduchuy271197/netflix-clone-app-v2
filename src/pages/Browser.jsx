import styled from "styled-components";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../services/requests";

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
`;

const Container = styled.div`
  width: 95%;
  margin-left: auto;
`;

const Main = styled.div``;

const Browser = () => {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Container>
        <Main>
          {requests.map(({ id, title, fetcher, isPoster }) => {
            return (
              <Row
                key={id}
                title={title}
                dataFetcher={fetcher}
                isPoster={isPoster}
              />
            );
          })}
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Browser;

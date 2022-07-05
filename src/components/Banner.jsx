import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { default as axios } from "../services/axios";
import requests from "../services/requests";

const imageSrc = "https://image.tmdb.org/t/p/original";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  height: 80vh;
  background-image: url(${imageSrc}${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;
`;
const InnerWrapper = styled.div`
  max-width: 700px;
`;
const Title = styled.h2`
  font-size: 60px;
  line-height: 1;
  margin-bottom: 20px;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const Button = styled(Link)`
  min-width: 120px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 16px 36px;
  border-radius: 10px;
`;
const Paragraph = styled.p`
  font-size: 20px;
`;

const Banner = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(requests[0].fetcher)
      .then((res) => {
        const posts = res.data.results;
        const index = Math.floor(Math.random() * posts.length);
        console.log(posts[index]);
        setPost(posts[index]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper imageUrl={post.backdrop_path}>
      <InnerWrapper>
        <Title>{post.name}</Title>
        <ButtonBox>
          <Button to="#">Play</Button>
          <Button to="#">More Info</Button>
        </ButtonBox>
        <Paragraph>{post.overview}</Paragraph>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Banner;

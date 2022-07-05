import { useEffect, useState } from "react";
import styled from "styled-components";
import { default as axios } from "../services/axios";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 14px;
`;
const InnerWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Box = styled.div`
  cursor: pointer;
`;

const Image = styled.img.attrs((props) => {
  return {
    src: `https://image.tmdb.org/t/p/w500${props.imagePath}`,
    alt: props.alt,
  };
})`
  width: 300px;
  height: 100%;

  //  object fit for modern browsers
  object-fit: cover;
  object-position: center;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.1);
  }
`;

const Row = ({ title, dataFetcher, isPoster }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(dataFetcher)
      .then((res) => {
        setPosts(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [dataFetcher]);

  const onError = (e) => {
    e.target.style.display = "none";
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <InnerWrapper>
        {posts.map((post, id) => {
          return (
            <Box key={id}>
              <Image
                onError={onError}
                imagePath={isPoster ? post.poster_path : post.backdrop_path}
                alt={post.title}
              />
            </Box>
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Row;

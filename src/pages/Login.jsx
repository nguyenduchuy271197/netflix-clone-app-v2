import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import bg from "../images/home_bg.jpeg";
import auth from "../utils/firebase";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
`;

const Main = styled.main`
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const InnerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 70px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
`;
const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
`;

const FormInput = styled.input`
  font-size: 14px;
  padding: 15px;
  border-radius: 6px;
`;
const EmailInput = styled(FormInput).attrs({ placeholder: "Email Address" })``;
const PasswordInput = styled(FormInput).attrs({ placeholder: "Password" })``;
const FormButton = styled.button.attrs({ type: "submit" })`
  text-align: center;
  padding-block: 15px;
  background-color: hsl(357, 92%, 47%);
  transition: 0.2s all;
  border-radius: 6px;

  &:hover {
    background-color: hsl(357, 92%, 60%);
  }
`;
const SubTitle = styled.p`
  display: flex;
  gap: 10px;
  color: #aaa;
`;

const SubtitleLink = styled(Link).attrs({ to: "/" })`
  color: #fff;
  font-weight: 900;
  transition: 0.2s all;

  &:hover {
    color: #ddd;
  }
`;

const Home = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/browser");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Navbar />
      <Main>
        <InnerMain>
          <Title>Sign in</Title>
          <SigninForm onSubmit={handleSubmit(onSubmit)}>
            <EmailInput {...register("email")} />
            <PasswordInput {...register("password")} />
            <FormButton>Sign in</FormButton>
          </SigninForm>
          <SubTitle>
            New to Netflix?
            <SubtitleLink>Sign up now.</SubtitleLink>
          </SubTitle>
        </InnerMain>
      </Main>
    </Wrapper>
  );
};

export default Home;

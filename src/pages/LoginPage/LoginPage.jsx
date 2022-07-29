import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(https://cdn.pixabay.com/photo/2021/02/16/02/56/clothes-6019690_960_720.jpg), center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

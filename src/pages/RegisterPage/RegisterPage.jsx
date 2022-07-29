import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg), center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            I'm agree with all conditions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in nulla
            nostrum libero aliquam a quod harum cumque, dignissimos repudiandae amet quidem quam officiis iste expedita
            quis! Doloribus, maxime quo.
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

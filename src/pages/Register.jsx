import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/392058/pexels-photo-392058.jpeg?auto=compress&cs=tinysrgb&w=600")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;

const Title = styled.h1`
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
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #D1A681;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: larger;
  display: block;
  padding: 5px;
  margin: 10px auto;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREA UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de Usuario" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar contraseña" />
          <Agreement>
            Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales.
            datos de acuerdo con la <b>Politica de Privacidad</b>
          </Agreement>
          <Button>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
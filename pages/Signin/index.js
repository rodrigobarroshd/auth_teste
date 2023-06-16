import React from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";
import Header from "../../components/Header";

function Signin() {
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="black" placeholder="E-mail" />
        <Input
          placeholderTextColor="black"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signin;

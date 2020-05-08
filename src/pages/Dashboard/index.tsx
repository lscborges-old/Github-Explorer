import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/48814319?s=460&u=1bdee3901c3e567b7f97e30ff05996cbbcad32c5&v=4"
            alt="Lucas Borges"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p> Easy peast highly scalable React JS & React Native forms!</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;

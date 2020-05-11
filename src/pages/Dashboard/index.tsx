import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

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
            <strong>gitExplorer/test</strong>
            <p>Git Explorer test aplication</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://scontent.ffor2-1.fna.fbcdn.net/v/t1.0-9/1383588_437024219741802_1202415424_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeHsJ80pLDj7NPua8FUZS4H5apnJ93FtX-Vqmcn3cW1f5f7SWiNxBvGlUhGoubluJ1wZQpiT9HKxsHZDGRGL0o0O&_nc_ohc=PZIM_2FSTKgAX_OyqeX&_nc_ht=scontent.ffor2-1.fna&oh=28365d0c501291ff0f4485114011e2f9&oe=5EDD1DB3"
            alt="Rafa Borges"
          />
          <div>
            <strong>corongo/Rafa</strong>
            <p> Rafa batutinha</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://scontent.ffor2-1.fna.fbcdn.net/v/t31.0-8/p960x960/18423131_10211103431434393_4118546511887905984_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_eui2=AeFHwVSrZf2mBCDLL8g7XYVwLKMei8MYjTYsox6LwxiNNg6nHxhvVfJyZPy8kiH7xH6BLQeoiENNobGLF36nz7GD&_nc_ohc=6gNpZhCv93UAX_PLkaD&_nc_ht=scontent.ffor2-1.fna&_nc_tp=6&oh=9f614db7d900e6a81a55bdbaf2dd4f22&oe=5EDDF0A3"
            alt="Lucas Borges"
          />
          <div>
            <strong>coronga/Gabi</strong>
            <p>Gabi Creuzica</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;

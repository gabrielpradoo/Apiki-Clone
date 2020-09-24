import React from "react";

import { Container, HeaderWrapper, MenuIcon } from "./styles";

import Logo from "../../assets/logo-apiki.png";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <a href=".">
          <img src={Logo} alt="logo" />
        </a>

        <ul>
          <li>
            <a href=".">Sustentação</a>
          </li>

          <li>
            <a href=".">Hospedagem</a>
          </li>

          <li>
            <a href=".">Desenvolvimento</a>
          </li>

          <li>
            <a href=".">Produtos</a>
          </li>

          <li>
            <a href=".">Trabalhe conosco</a>
          </li>

          <li>
            <a href=".">Atendimento</a>
          </li>

          <li>
            <a href=".">Blog</a>
          </li>

          <li>
            <button>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

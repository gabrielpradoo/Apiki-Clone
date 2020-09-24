import React from 'react';

import { Container, Content } from './styles';

const Banner: React.FC = () => {
   return (
      <Container>
         <Content>
            <h1>
               Carreira
            </h1>

            <span>
                  Chega mais, vem ser um Apiker!
            </span>
         </Content>
      </Container>
  );
}

export default Banner;
import styled from 'styled-components';

import banner from '../../assets/page-bg.png'

export const Container = styled.div`
  height: 42vh;

  border: 0.5px solid #cc8e13;

  background-image: url(${banner})
`;

export const Content = styled.div`
   width: 40%;
   height: 100%;
   margin: auto;
   color: var(--color-white);
   display: flex;
   flex-direction: column;
   align-items: center;

   > h1 {
      margin-top: auto;
      margin-bottom: 3px;
      font-size: 2.25em;
      
   }

   > span {
      margin-bottom: auto;
      font-size: 100%;
   }
`;
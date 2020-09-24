import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi'


export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: var(--color-white);

  border-bottom: 0.1 px solid #000;
`;

export const HeaderWrapper = styled.header`
   max-width: 1170px;
   height: 70px;

   margin: 0 auto;

   display: flex;
   justify-content: space-between;

   > a {
      width: 20%;
      display: flex;
      align-items: center;
     > img {
         top: 50%;
         bottom: 50%;
         display: inline-block;
         margin: auto 0;
         height: 80%;
         width: auto;
     }
  }

  > ul {
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;

     > li {
        list-style: none;

        > a {
           text-decoration: none;
           color: var(--color-tertiary);
           font-weight: 400;
        }

        > button {
           background: none;
           border: none;
           outline: none;
           cursor: pointer;
        }
     }
  }
`;

export const MenuIcon = styled(HiMenu)`
  width: 25px;
  height: 32px;
  fill: var(--color-primary);
`;


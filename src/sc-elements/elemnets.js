import styled from 'styled-components';
import { FaChevronCircleUp } from '@react-icons/all-files/fa/FaChevronCircleUp';

export const UpArrow = styled(FaChevronCircleUp)`
  color: grey;
    position: fixed;
    z-index: 5;
    bottom: 15vh;
    right: 5vh;
    visibility: hidden;
    transform: translateY(100px);
    transition: all .5s ease;
    height: 4vh;
    width: 4vh;
    & :hover{
      cursor: pointer;
      color: rgb(86, 121, 218);
    };
  @media(max-width: 1200px){
      height: 4vh;
      width: 4vh;
      bottom: 18vh;
    };
  }
  @media(max-width: 600px){
      height: 3vh;
      width: 3vh;
  }
`;
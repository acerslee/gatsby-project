import styled from "styled-components"
import { FaChevronCircleUp } from "@react-icons/all-files/fa/FaChevronCircleUp"

export const UpArrow = styled(FaChevronCircleUp)`
  color: grey;
  position: fixed;
  z-index: 2;
  bottom: 15%;
  right: 5%;
  visibility: hidden;
  transform: translateY(100px);
  transition: all 0.5s ease;
  height: 4vh;
  width: 4vh;
  color: rgba(210, 210, 210, 0.75);
  & :hover {
    cursor: pointer;
    color: rgba(150, 150, 150, 1);
  }
  @media (max-width: 711px) {
    height: 3vh;
    width: 3vh;
  }
`

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const WelcomeContainer = styled.section`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  @media (max-width: 711px) {
    height: 65vh;
  }
`

const ContentContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`

const IntroText = styled.p`
  font-size: 2.5em;
  @media (max-width: 711px) {
    font-size: 1.3em;
  }
`

const NameSpan = styled.span`
  font-weight: 700;
  font-size: 4em;
  @media (max-width: 1024px) {
    font-size: 2.5em;
  }
`

const SubText = styled.p`
  font-size: 1.5em;
  @media (max-width: 711px) {
    font-size: 1.1em;
  }
`

const Button = styled.button`
  background-color: rgb(254 68 69);
  transition: background-color 500ms;
  border-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.5rem;
  &: hover {
    cursor: pointer;
    background-color: rgb(174 67 67);
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const ContactLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`

const Welcome = ({ node }) => {
  return (
    <WelcomeContainer
      id="welcome-section"
      aria-label="intro to give webpage a pop"
    >
      <ContentContainer>
        <IntroText>
          Hello World! My name is
          <br />
          <NameSpan>Alex Lee</NameSpan>
        </IntroText>
        <SubText>{node.node.subtext}</SubText>
        <Button>
          <ContactLink href="#contact">CONTACT</ContactLink>
        </Button>
      </ContentContainer>
    </WelcomeContainer>
  )
}

Welcome.propTypes = {
  node: PropTypes.object,
}

export default Welcome

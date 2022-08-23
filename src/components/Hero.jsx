import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
`
const HeroContainer = styled.div`
display: flex;
align-items: center;
` ;

const HeroImg = styled.div`
flex: 1;
` ;

const HeroInfo = styled.div`
flex: 1;
` ;

const Image = styled.image``;

const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``



const Hero = () => {
  return (
    <Container>
        <HeroImg>
          <Image/>
        </HeroImg>
        <HeroInfo>
          <Title>WELCOME</Title>
          <Desc>Real comfort, visual and physical, is vital to every room </Desc>
          <Button>SHOP NOW</Button>
        </HeroInfo>
    </Container>
  )
}

export default Hero
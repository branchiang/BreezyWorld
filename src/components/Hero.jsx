import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
` ;

const HeroContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
` ;

const HeroImg = styled.div`
height: 100%;
flex: 1;
` ;

const HeroInfo = styled.div`
flex: 1;
padding: 50px;
` ;

const Image = styled.img`
height: 80%;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
` ;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
` ;



const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroImg>
          <Image src="/heroImg.jpg" />
        </HeroImg>
        <HeroInfo>
          <Title>WELCOME</Title>
          <Desc>Real comfort, visual and physical, is vital to every room </Desc>
          <Button>SHOP NOW</Button>
        </HeroInfo>
        </HeroContainer>
    </Container>
  )
}

export default Hero
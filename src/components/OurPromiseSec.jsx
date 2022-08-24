import styled from "styled-components";


const Container = styled.div`
  height: 60vh;
  padding: 10px 50px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
padding-left: 50px;
padding-right: 50px;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
`;



const OurPromiseSec = () => {
  return (
    <Container>
      <Title>Our Promise</Title>
      <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ut vivamus enim urna, 
        aenean amet, mauris vitae, velit. Tempor amet sit ultricies in tristique leo duis egestas.
         Praesent vitae tincidunt aliquam faucibus vestibulum. Turpis sodales purus, commodo scelerisque 
         suscipit in lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ut vivamus enim urna, 
        aenean amet, mauris vitae, velit. Tempor amet sit ultricies in tristique leo duis egestas.
         Praesent vitae tincidunt aliquam faucibus vestibulum. Turpis sodales purus, commodo scelerisque 
         suscipit in lacus.</Desc>
    </Container>
  );
};

export default OurPromiseSec;
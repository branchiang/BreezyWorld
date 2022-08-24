import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal on New Products this Month!
        </Container>
    )
}

export default Announcement

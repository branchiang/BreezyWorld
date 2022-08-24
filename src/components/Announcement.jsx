import styled from "styled-components"

const Container = styled.div`
    padding: 5px;
    background-color: teal;
    color: white;
    text-align: center;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal on New Products this Month!
        </Container>
    )
}

export default Announcement

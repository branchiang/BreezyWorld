
import { Person } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Conatainer = styled.div`
    height: 60px;
`
const Wrappper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`
const Title = styled.span`
    font-size: 30px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`


const Navbar = () => {
    return (
        <Conatainer>
            <Wrappper>
              <Left>
                <Title>BreezyWorld</Title>
              </Left>
              <Center>Center</Center>
              <Right>
            
                <Person></Person>
              </Right>
            </Wrappper>
        </Conatainer>
    )
}

export default Navbar


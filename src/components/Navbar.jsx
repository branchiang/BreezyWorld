
import { Badge } from '@material-ui/core'
import { Person, ShoppingCart, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Conatainer = styled.div`
    padding: 0px 30px;

`
const Wrappper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const Left = styled.div`
    flex: 1;
    text-align: left;
`
const Title = styled.h1`
    font-weight: bold;
    cursor: pointer;
`

const Center = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;


`
const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 50px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const IconContainer = styled.div`
    
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 20px;

`

const Navbar = () => {
    return (
        <Conatainer>
            <Wrappper>
              <Left>
                <Title >BreezyWorld</Title>
              </Left>
              <Center>
                <MenuItem><b>Home</b></MenuItem>
                <MenuItem>Shop</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact Us</MenuItem>
              </Center>
              <Right>
                <MenuItem>Sign In</MenuItem>
                <IconContainer>
                    <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined></ShoppingCartOutlined>
                    </Badge>
                    <Person></Person>
                </IconContainer>
              </Right>
            </Wrappper>
        </Conatainer>
    )
}

export default Navbar


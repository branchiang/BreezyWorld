
import { Badge } from '@material-ui/core'
import { Person, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    padding: 0px 30px;
    background-color: #F2F0F1;

`
const Wrapper = styled.div`
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
        <Container>
            <Wrapper>

              <Left>
                <Title ><Link to="/" className="link">
                    BreezyWorld
                </Link></Title>
              </Left>

              <Center>
                <MenuItem><Link to="/" className="link">
                        Home
                    </Link></MenuItem>
                <MenuItem><Link to="/products" className="link">
                        Shop
                    </Link></MenuItem>
                {/* <MenuItem>Services</MenuItem>
                <MenuItem>Contact Us</MenuItem> */}
              </Center>

              <Right>
                
                <MenuItem>
                    <Link to="/register" className="link">
                    Sign Up
                    </Link>
                </MenuItem>
                <IconContainer>
                    <Badge badgeContent={2} color="primary">
                    <Link to="/cart" className="link">
                         <ShoppingCartOutlined></ShoppingCartOutlined>
                         </Link>
                    </Badge>
                    <Link to="/login" className="link">
                    <Person></Person>
                    </Link>
                </IconContainer>
              </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar


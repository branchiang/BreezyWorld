import React from 'react'
import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px 50px;
    display: flex;
`

const Left = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1; 
    padding: 20px;
`

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
 `
const Payment = styled.img`
    width: 60%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BreezyWorld</Logo>
                <Desc>
                    BreezyWorld is an innovative company that offers a wide range of carpentry products and services.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='385999'>
                        <Facebook ></Facebook>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram ></Instagram>
                    </SocialIcon>
                    <SocialIcon color='0072B1'>
                        <LinkedIn ></LinkedIn>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter ></Twitter>
                    </SocialIcon >
                    <SocialIcon color='E60023'>
                        <Pinterest ></Pinterest>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>Services</ListItem>
                    <ListItem>Profile</ListItem>
                    <ListItem>Contact Us</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}></Room>819 Seoke Street, Beirut, Phuthaditjaba, 9866</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}></Phone>+27 72 357 1812</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}></MailOutline>breezyworldptyltd@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer

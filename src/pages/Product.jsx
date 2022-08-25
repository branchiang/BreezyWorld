import { Filter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 85%;
    height: 80vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 20px 50px;
    margin-right: 50px;
`


const Title = styled.h1`
    font-weight: 200;
    font-size: 35px;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter1 = styled.div``

const FilterTitle = styled.div``

const FilterColor = styled.span``

const FilterWood = styled.select``

const FilterWoodType = styled.option``





const Product = () => {
    return (
        <Container>
            <Navbar/>
           
            <Footer/>
        </Container>
    )
}

export default Product;

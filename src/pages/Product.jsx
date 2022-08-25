import { Filter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
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
            <Announcement/>
            <Wrapper>
            <ImageContainer>
                    <Image src="https://static.dezeen.com/uploads/2019/01/muuto-thomas-bentzen-cover-lounge-chair-design_dezeen_2364_col_18-852x1136.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Product Title</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum sint vero, repellendus ratione amet? Numquam necessitatibus unde libero quidem, debitis eos eius culpa est iste laboriosam nobis optio ducimus!</Desc>
                    <Price><b>Price:</b> R1 234 / Unit</Price>
                    <FilterContainer>
                        <Filter1>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="brown"/>
                            <FilterColor color="Black"/>
                            <FilterColor color="White"/>
                        </Filter1>
                        <Filter1>
                            <FilterTitle>Wood Type</FilterTitle>
                            <FilterWood>
                                <FilterWoodType>Oak</FilterWoodType>
                                <FilterWoodType>Brown Maple</FilterWoodType>
                                <FilterWoodType>Walnut</FilterWoodType>
                                <FilterWoodType>Pine</FilterWoodType>
                                <FilterWoodType>Cherry</FilterWoodType>
                                <FilterWoodType>Hickory</FilterWoodType>
                                <FilterWoodType>Elm</FilterWoodType>
                            </FilterWood>
                        </Filter1>                    
                    </FilterContainer>
                </InfoContainer>
            </Wrapper>
            
            <Footer/>
        </Container>
    )
}

export default Product

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutUspic4 from '../imgs/AboutUspic4.svg';




const About = () => {
  return (
    <Wrapper>
      <div
   data-aos="fade-up"
   data-ao-easing = "linear"
           data-aos-delay="500"
     data-aos-duration="1000">
      <Image 
        src={AboutUspic4}
        alt="example image"
        whileHover={{ scale: 1.1 }}
      />
      
    </div>
      <Content>
      
        <Title><div data-aos="flip-down"
        data-aos-delay="400"  data-aos-duration="2000" 
        data-ao-easing = "linear">About Us</div></Title>
        <Subtitle><div data-aos="fade-left"
        data-aos-easing="linear"
     data-aos-duration="1500" data-aos-delay="400" data-ao-easing = "linear">Our Mission</div></Subtitle>
        <Description >
          
        <MoneyIcon>$</MoneyIcon>
        Our mission is to help people manage their money and achieve financial
         freedom. We believe that everyone deserves to live a life free from
          financial stress and worry, and we're here to make that a reality.
         
        </Description>
        
        <Subtitle><div data-aos="flip-right"
         data-aos-duration="2000" data-ao-easing = "linear"
         data-aos-delay="400">Our Team</div></Subtitle>
        <List>
          <ListItem>
          
            <MoneyIcon> $</MoneyIcon>
           Sai Charan
          </ListItem>
          <ListItem>
            <MoneyIcon> $</MoneyIcon>
          Ganesh
          </ListItem>
          <ListItem>
            <MoneyIcon>$</MoneyIcon>
            Uday Kiran
          </ListItem>
          <ListItem>
            <MoneyIcon>$</MoneyIcon>
            Harthik
            
          </ListItem>
        </List>
        
      </Content>
    </Wrapper>
    
  );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color:#efefe8;
  

  @media (max-width: 768px) {
    
    flex-direction: column;
    padding: 20px;

  }
`;




const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding: 0;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;


  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
  }

`;

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
    
    
  }
`;

const MoneyIcon = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 32px;
  color: #007bff;
 
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

`;

const ListItem = styled.li`
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #666;
  transition: all 0.2s ease-out;
  

  &:hover {
    transform: translateX(10px);
    color: #007bff;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
const Image = styled(motion.img)`
 

  @media (max-width: 768px) {
    
  
    
    display:none;
    marginTop: 5em;
    margin-bottom: 1em;
     
  }
  @media screen and (max-width:400px) {
    
        width : 60%;
    
}
`;

export default About;



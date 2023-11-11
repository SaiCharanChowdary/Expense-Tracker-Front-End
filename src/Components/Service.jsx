import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Button } from '@mui/material';
import Nav from 'react-bootstrap/Nav';

const Service = () => {
  const features = [
    {
      title: "Real-time analysis",
      description:
        "Get up-to-the-minute information on your income, expenses, and investments, so you can make informed financial decisions.",
      icon: "💰",
    },
    {
      title: "Interactive charts",
      description:
        "View your financial data in stunning visualizations, with detailed breakdowns by category, time period, and more.",
      icon: "📈",
    },
    {
      title: "Personalized insights",
      description:
        "Receive personalized insights and recommendations based on your financial data, so you can optimize your financial strategy.",
      icon: "🔍",
    },
  ];
  const variants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Container>
      <TitleContainer
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Title><div data-aos="fade-down"
   data-ao-easing = "linear"
           data-aos-delay="600"
     data-aos-duration="1000">Money Analysis</div></Title>
        <SubTitle><div data-aos="flip-right"
   data-ao-easing = "linear"
           data-aos-delay="600"
     data-aos-duration="1700">Make informed financial decisions</div></SubTitle>
      </TitleContainer>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesContainer>
      <ButtonContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
       <Nav.Link href="/register">
    <StyledButton
      
      size="large"
      endIcon={<HourglassEmptyIcon/>}
      color="primary"
      variant="outlined"
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      sx={{  marginTop: 2 }}
      style={{  fontSize: '20px', padding: '12px 24px',color: 'white', backgroundColor: '#545454', fontFamily: 'Poppins, sans-serif' }}
   >
      <span style={{ textTransform: 'capitalize' }}>Get Started</span>
    </StyledButton>
    </Nav.Link>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color:#efefe8;
  
 
`;

const TitleContainer = styled(motion.div)`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  
  font-weight: bold;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    font-size : 2.5rem;
    margin-bottom: 1em ;
   
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  color: #777;
  @media screen and (max-width: 768px) {
    font-size : 1rem;
    margin-bottom: 1em ;
  }

`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  gap: 3rem;
`;

const Feature = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const FeatureDescription = styled.p`
 font-size: 1.1rem;
 line-height: 1.5;
  color: #555; 
  margin-top: 1rem`;

const ButtonContainer = styled(motion.div)`
 margin-top: 4rem;
margin-bottom: 2.8em`;


const StyledButton = styled(motion(Button))`

  &:hover {
    background-color: #333333;
  }
`;
export default Service;

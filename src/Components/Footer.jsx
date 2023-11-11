import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  color: #333;
  padding: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Link = styled(motion.a)`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8bc34a;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SocialLink = styled(motion.a)`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8bc34a;
  }
`;

const Divider = styled(motion.div)`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 2rem 0;
`;

const Footer = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Title>Our Tools</Title>
      <Link
        whileHover={{ scale: 1.1 }}
        href="/expense-tracker"
      >
        Expense Tracker
      </Link>
      <Link
        whileHover={{ scale: 1.1 }}
        href="/budget-planner"
      >
        Budget Planner
      </Link>
      <Link
        whileHover={{ scale: 1.1 }}
        href="/savings-calculator"
      >
        Savings Calculator
      </Link>
      <SocialLinks>
        <SocialLink
          whileHover={{ scale: 1.2 }}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </SocialLink>
        <SocialLink
          whileHover={{ scale: 1.2 }}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
      <Divider
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <p>© 2023 Our Website. All rights reserved.</p>
    </Container>
  );
};

export default Footer;

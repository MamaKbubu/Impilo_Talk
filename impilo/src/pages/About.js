import React from "react";
import Quote from "../images/Quote.jpg";
import Navbar from "../components/Navbar";
import styled from "styled-components"; // Import styled-components if you're using it

// Styled components for styling purposes, adjust as needed
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 20px; /* Adjust padding as needed */
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px; /* Adjust max-width as needed */
  margin-top: 40px; /* Adjust margin-top as needed */
`;

const AboutImage = styled.img`
  max-width: 35%;
  height: auto;
  margin-right: 20px; /* Adjust margin-right as needed */
`;

const AboutText = styled.div`
  flex: 1;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <h1>About Us</h1>
        <AboutContent>
          <AboutImage src={Quote} alt="About Us Image" />
          <AboutText>
            <p>
              Impilo Talk is isiZulu which is 1 of the 12 official languages in
              South Africa and it means Health Talk.The main purpose of Impilo
              Talk is to connect rural or underserved communities with
              healthcare professionals or trained staff through
              telemedicine(remote monitoring of patients). Come and meet our
              Staff.
            </p>
          </AboutText>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;

import { Container } from './styles';
import { FaLinkedin, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa'; // Importing icons from react-icons
import styled from 'styled-components'; // Assuming you're using styled-components for styling

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34; // Dark background for a classy look
  color: white; // White text for contrast
  border-top: 2px solid #0077B5; // Optional: a classy border
  font-size: 14px; // Font size for the footer text
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px; // Space between icons
`;

const FooterText = styled.div`
  text-align: left; // Align text to the left
`;

export function Footer() {
  return (
    <FooterContainer className="footer">
      <FooterText>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{'<John Allen/>'}</p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <p>Developed and Designed by John Allen</p>
      </FooterText>
      <SocialMediaContainer>
        <a
          href="https://www.linkedin.com/in/johnallen0099"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} style={{ color: '#0077B5' }} />
        </a>
        
        <a
          href="https://www.instagram.com/dev.allen9/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#E1306C' }} // Instagram color
           >
           <FaInstagram size={30} />
            </a>
        <a
          href="https://x.com/devallen9009" // Replace with your actual X (Twitter) link
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={30} style={{ color: '#1DA1F2' }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={30} style={{ color: '#ffffff' }} />
        </a>
      </SocialMediaContainer>
    </FooterContainer>
  );
}
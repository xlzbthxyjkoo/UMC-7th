import styled from "styled-components";

const Footer = () => {
  return (
    <FooterNav>
      <FooterCenter>
        <h3>University MakeUs Challenge</h3>
      </FooterCenter>
    </FooterNav>
  );
};

const FooterNav = styled.nav`
  padding: 1.25rem 2rem;

  h3 {
    margin: 0;
    color: #645cff;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export default Footer;

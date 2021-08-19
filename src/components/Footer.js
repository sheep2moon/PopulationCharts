import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        api:{' '}
        <a
          href='https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information'
          target='blank'
        >
          worldbank.org
        </a>
      </p>
      <p>
        github:{' '}
        <a href='https://github.com/sheep2moon/PopulationCharts'>sheep2moon</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  > p {
    color: ${({ theme }) => theme.dark};
    font-weight: 700;
    margin: 0 2em;
    > a {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

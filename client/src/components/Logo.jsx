import React from 'react'
import styled from 'styled-components'

const Logo = props => (
  <LogoImage>Elite <i class="material-icons">whatshot</i></LogoImage>

);

export default Logo;

const LogoImage = styled.div`
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  color: white;
`;
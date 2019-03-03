import React from 'react'
import styled from 'styled-components'

const Logo = props => (
  
    <LogoContainer>
      <LogoCompiled>
         <Circle><i class = 'far fa-circle'></i></Circle>
          <Utensils><i class='fas fa-utensils'></i></Utensils>
          <EliteText>
            <Elite>Elite</Elite>
            <Grub>Grub</Grub>
          </EliteText>
      </LogoCompiled>  
    </LogoContainer>
    
);

export default Logo;

const LogoContainer = styled.div`
  margin-left: 9px;
  margine-right: 9px;
  border-collapse: collapse;
  border-spacing: 0 0;
`;

const LogoCompiled = styled.div`
  width: 50px;
  height: 40px;
  background-repeat: no-repeat;
`;


const EliteText = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: white;
  position: absolute;
  left: 118px;
  top: 14px;
  background-color: #d32323;
  font-variant-caps: titling-caps;
  font-size: 15px;
  text-shadow: 3px 4px 3px #0000002e;
 `;

 const Elite = styled.div`
   font-family: inherit;
 `;

 const Grub = styled.div`
 font-family: inherit;
`;

const Circle = styled.i`
  font-size: 40px;
  position: relative;
  color: white;
  text-shadow: 3px 4px 3px #0000002e;
`;

const Utensils = styled.i`
  font-size: 12px;
  position: relative;
  left: -26px;
  top: -10px;
  color: white;
  text-shadow: 3px 4px 3px #0000002e;
`;
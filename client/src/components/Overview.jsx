import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import LogAndSign from './LogInSignIn';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TopHeader>
        <TopHeaderWrapper>
          <TopRedContainer>
            <HeaderContainer>
              <HeaderItemsContainer>
                <LogoContainer>
                  <Logo />
                </LogoContainer>
                <SearchContainer>
                  <Search />
                </SearchContainer>
                <LogSignUpContainer>
                  <LogAndSign />
                </LogSignUpContainer>
              </HeaderItemsContainer>
            </HeaderContainer>

          </TopRedContainer>
        </TopHeaderWrapper>

      </TopHeader>
    );
  }
}



export default Overview

const TopHeader = styled.div`
  min-width: 1020px;
  z-index: 6;
`;

const TopHeaderWrapper = styled.div`
  background: #d32323;
  padding: 12px 0;
  position: relative;
  // z-index: 6;
  border-color: #e6e6e6;
`;

const TopRedContainer = styled.div`
  min-width: 1020px;
  background: none;
`;
const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
`;

const HeaderItemsContainer = styled.div`
  margin-left: -18px;
  margin-right: -18px;
  border-collapse: separate;
  border-spacing: 18px 0;
  display: table;
  min-width: 100%;
  table-layout: auto;
`;

const LogoContainer = styled.div`
  margin-left: 9px;
  margin-right: 9px;
  border-collapse: collapse;
  border-spacing: 0 0;
  vertical-align: middle;
  box-sizing: border-box;
  display: table-cell;
`;

const SearchContainer = styled.div`
  margin-left: 9px;
  margin-right: 9px;
  border-collapse: collapse;
  border-spacing: 0 0;
  width: 100%
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle !important;
`;

const LogSignUpContainer = styled.div`
  margin-left: 9px;
  margin-right: 9px;
  border-collapse: collapse;
  border-spacing: 0 0;
  vertical-align: middle;
  box-sizing: border-box;
  display: table-cell;
`;
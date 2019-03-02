import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TopHeader>
        <TopHeaderWrapper>
          <HeaderContainer>
            <HeaderItemsContainer>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <SearchContainer>
                <Search />
              </SearchContainer>

            </HeaderItemsContainer>
          </HeaderContainer>
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
`;

const HeaderContainer = styled.div`
  width: 960px;
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
import React from 'react';
import styled from 'styled-components';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchSuggestContainer>
        <FormComponent>
          <SearchBarWrapper>
            <SearchBarInputsWrapper>
              <SearchInputsContainer>
                <SearchCategory>
                  <SearchFillSuggestions>
                    <Label>
                      <SearchCategoryText>Find</SearchCategoryText>
                      <SearchCategoryFieldHolder>
                        <SearchPlaceHolderWrap placeholder="tacos, cheap dinners, Max's" type="text" />
                      </SearchCategoryFieldHolder>
                    </Label>
                  </SearchFillSuggestions>
                </SearchCategory>
                <SearchByLocation>
                  <SearchByLocationWrap>
                    <LocationLabel>
                      <LocationSearchText>Near</LocationSearchText>
                      <LocationCategoryFieldHolder>
                        <LocationPlaceHolderWrap placeholder='address, neighborhood, city, state or zip' />
                      </LocationCategoryFieldHolder>
                    </LocationLabel>
                  </SearchByLocationWrap>
                </SearchByLocation>
              </SearchInputsContainer>
            </SearchBarInputsWrapper>
            <SearchButtonWrapper>
              <SearchButtonOutterBox>
                <SearchButtonInlineBlock></SearchButtonInlineBlock>
                <SearchButtonAction>
                  <SearchButton ><i className='fas fa-search'></i></SearchButton>
                </SearchButtonAction>
              </SearchButtonOutterBox>
            </SearchButtonWrapper>
          </SearchBarWrapper >
        </FormComponent >
      </SearchSuggestContainer>
    );
  }
}


export default Search

const SearchSuggestContainer = styled.div`
  width: 706px;
`;

const FormComponent = styled.div`
  margin-bottom: 0px ! important;
  display: block;
`;

const SearchBarWrapper = styled.div`
  display: table;
  min-width: 100%
  table-layout:auto;
`;

const SearchBarInputsWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: top;
`;

const SearchInputsContainer = styled.div`
  display: flex;
  min-width: 100%;
  table-layout: auto;
`;

const SearchCategory = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: block;
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;
`;

const SearchFillSuggestions = styled.div`
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  position: relative;
  display: block;
`;

const Label = styled.label`
  border-radius: 4px 0 0 4px;
  position: relative;
  box-shadow: none;
  padding:8px 12px;
  border: none;
  background: #fff;
  margin: 0;
  height: 36px;
  line-height: 20px;
  cursor: text;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  width: 100%
  font-size: 14px;
  font-weight: bold;
`;

const SearchCategoryText = styled.span`
  float: left;
  margin-right: 5px;
  font-weight: bold;
  color: #333;
  cursor: default;
  user-select: none;
`;

const SearchCategoryFieldHolder = styled.span`
  display: block;
  overflow: hidden;

`;

const SearchPlaceHolderWrap = styled.input`
  margin: 0;
  border: 0;
  outline: 0;
  box-shadow: none;
  background: none;
  display: inline-block;
  width: 100%;
  vertical-align: baseline !important;
  padding: 0 !important;
  cursor: text;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  -webkit-writing-mode: horizontal-tb !important;

`;

const SearchByLocation = styled.div`
  border-left: 1px solid #e6e6e6;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: block
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;
`;

const SearchByLocationWrap = styled.div`
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  position: relative;
  display: block;
`;

const LocationLabel = styled.label`
  box-shadow: none;
  padding: 8px 12px;
  border: none;
  border-radius: 0;
  background: #fff;
  margin: 0;
  height: 36px;
  line-height: 20px;
  cursor: text;
  position: relative;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  vertical-align: baseline;
`;

const LocationSearchText = styled.span`
  float: left;
  margin-right: 5px;
  font-weight: bold;
  color: #333;
  cursor: default;
  user-select: none;

`;

const LocationCategoryFieldHolder = styled.span`
  display: block;
  overflow: hidden;
`;


const LocationPlaceHolderWrap = styled.input`
  margin: 0;
  border: 0;
  outline: 0;
  box-shadow: none;
  background: none;
  display: inline-block;
  width: 100%;
  vertical-align: baseline !important;
  padding: 0 !important;
  cursor: text;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  -webkit-writing-mode: horizontal-tb !important;
`;


const SearchButtonWrapper = styled.div`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: top;
`;

const SearchButtonOutterBox = styled.div`
  // border-top-right-radius: 4px;
  // border-bottom-right-radius: 4px;
  margin-top: -6px;
  margin-left: -3px;
  margin-right: -3px;
  display: block;
  font-size: 0;
  line-height: 1;
  text-align: left;
  border-collapse: separate;
  border-spacing: 6px 0;
  min-width: 100%
  table-layout: auto;

`;

const SearchButtonInlineBlock = styled.div`
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3px;
  padding-right: 3px;
  zoom: 1;
  width: auto;
  font-size: 14px;
  line-height: 1.28571em;
  border-collapse: collapse;
  border-spacing: 0 0;
  box-sizing: border-box;
  vertical-align: top;
  display: none !important;
`;

const SearchButtonAction = styled.div`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3px;
  padding-right: 3px;
  display: inline-block;
  zoom:1;
  width: auto;
  font-size: 14px;
  line-height: 1.228571em;
  border-collapse: collapse;
  border-spacing: 0 0;
  box-sizing: border-box;
  vertical-align: top;
  background: #bd1f1f
`;

const SearchButton = styled.button`
  box-shadow: none;
  border: 0;
  border-radius: 4px 0 0 4px;
  background: none;
  color: white;
  line-height: 36px;
  padding: 0 15px;
  width: 54px;
  vertical-align: middle;
  margin: 0;
  outline:0;
  transition: all 0.6s;
  transition-property: background-color, background-position, background-size, border-color;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  user-select: none;
  font-size: 16.5px;
  overflow: visible;
  align-items: flex-start;
  -webkit-appearance: button;
`;
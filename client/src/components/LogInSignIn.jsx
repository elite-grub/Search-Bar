import React from 'react';
import styled from 'styled-components';
import SignupModal from './SignupModal.jsx';

class LogAndSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    // this.handleToggleModal = this.handleToggleModal.bind(this)
  }

  openModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <LogSignWrap>
        <LogSignArrangeWrap>
          <LogSignBorderContainer>
            <LogInContainer>
              <LogInLink>
                <LogInButtonText>Log In</LogInButtonText>
              </LogInLink>
            </LogInContainer>
            <SignUpContainer>
              <SignUpLink>
                <SignupModal />
                <SignUpButtonText>Sign Up</SignUpButtonText>
              </SignUpLink>
            </SignUpContainer>
          </LogSignBorderContainer>
        </LogSignArrangeWrap>
      </LogSignWrap >

    );
  }


}

export default LogAndSign

const LogSignWrap = styled.div`
  // border-color: #e6e6e6;
  margin-left: -6px;
  margin-right: -6px;
  border-collapse: separate;
  border-spacing: 6px 0;
  display: table;
  min-width: 100%
  table-layout: auto;
`;

const LogSignArrangeWrap = styled.div`
 margin-left: 3px;
 margin-right: 3px;
 border-collapse: collapse;
 border-spacing: 0 0;
 white-space: nowrap !important;
 box-sizing: border-box;
 display: table-cell;
 vertical-align: top;
`;

const LogSignBorderContainer = styled.div`
  display: block;
  border-color: #e6e6e6;
`;

const LogInContainer = styled.span`
  display: inline-block;
  border-color: e6e6e6;

`;

const LogInLink = styled.div`
  background: #d32323;
  width: 48px;
  border: 1px solid #bd1f1f;
  cursor: pointer;
  color: #fff;
  display: block;
  padding: 12px;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
  border-radius: 3px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;

`;

const LogInButtonText = styled.span`
  color:inherit;
  text-align: left;
  font-size: inherit;
  line-height: inherit;
`;

const SignUpContainer = styled.button`
  margin-left: 3px;
  display: inline-block;
  border-color: e6e6e6;
  vertical-align: baseline;
`;

const SignUpLink = styled.div`
  background: #f5f5f5;
  width:48px;
  color: #000;
  cursor: pointer;
  display: block;
  padding: 12px;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
  border-radius: 3px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const SignUpButtonText = styled.span`
  color: inherit;
  text-align: left;
  font-size: inherit;
  line-height: inherit;
`;
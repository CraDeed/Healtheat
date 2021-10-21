import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  display: flex;
  padding: 0 10px;
  height: 60px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
`;

const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const BrandHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonBlock = styled.button`
  margin-left: 0.5rem;
  color: #fff;
  height: auto;
  line-height: 1;
  padding: 8px;
  background-color: #ff7867;
  border-radius: 4px;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <LeftBlock>left</LeftBlock>
        <BrandHeader>헤더</BrandHeader>
        <ButtonWrapper>
          <button>
            <Link to="/">로그인</Link>
          </button>
          <ButtonBlock>
            <Link to="/signup">회원가입</Link>
          </ButtonBlock>
        </ButtonWrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;

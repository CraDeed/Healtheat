import React, { useState } from 'react';
import styled from '@emotion/styled';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import useInput from '../../hooks/useInput';
import { EyesBlock, FormInput } from '../commonStyled/FormInput';
import { Link } from 'react-router-dom';

interface LoginModalProps {
  isModal: boolean;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
}

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9;
`;

const ModalContainer = styled.article`
  padding: 24px;
  margin: auto;
  width: 360px !important;
  height: 432px;
  background-color: #fff;
  border-radius: 6px;
  z-index: 9999;
`;

const CloseSpan = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoSpan = styled.span`
  display: flex;
  align-items: center;
  margin: 12px 0 24px;
`;

const LoginButton = styled.button`
  border-color: #1cbdea;
  background-color: #1cbdea;
  font-weight: bold;
  margin: 12px 0 !important;
  width: 312px;
  height: 48px;
  border: 1px solid;
  color: #fff;
  padding: 0 12px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;
  cursor: pointer;
  border-radius: 4px;
`;

const RegisterWrapper = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const GoToRegister = styled.span`
  font-size: 13px;
  color: #616568;
  border-bottom: 1px solid #858a8d;
  cursor: pointer;
`;

const OAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OAuthLine = styled.hr`
  position: relative;
  bottom: -8px;
  display: block;
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
`;

const OAuthTitle = styled.span`
  padding: 0 8px;
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.3px;
  color: #abb0b5;
  z-index: 11;
  background-color: #fff;
`;

const LoginModal = ({ isModal, closeModal }: LoginModalProps) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });

  const onChangePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  return (
    <>
      {isModal ? (
        <ModalWrapper onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseSpan onClick={closeModal}>
              <div style={{ marginLeft: 'auto' }}>&times;</div>
            </CloseSpan>
            <LogoSpan>
              <div style={{ margin: 'auto', fontSize: '24px' }}>Helatheat</div>
            </LogoSpan>
            <FormInput
              id="email"
              name="email"
              type="text"
              placeholder="이메일 입력"
              onChange={onChangeEmail}
              style={{ width: '312px' }}
            />
            <div style={{ position: 'relative' }}>
              <FormInput
                id="password"
                name="password"
                type={passwordType.type}
                placeholder="비밀번호"
                onChange={onChangePassword}
                style={{ marginTop: '14px', width: '312px' }}
              />
              <EyesBlock onClick={onChangePasswordType} style={{ top: '22px' }}>
                {passwordType.visible ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}
              </EyesBlock>
            </div>
            <LoginButton>로그인</LoginButton>
            <RegisterWrapper>
              <GoToRegister>
                <Link to="/signup">
                  <div onClick={closeModal}>회원가입</div>
                </Link>
              </GoToRegister>
            </RegisterWrapper>
            <OAuthWrapper>
              <OAuthLine />
              <OAuthTitle>간편 로그인</OAuthTitle>
            </OAuthWrapper>
          </ModalContainer>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default LoginModal;

import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import useInput from '../../hooks/useInput';
import { EyesBlock, FormInput } from '../commonStyled/FormInput';

interface PasswordVisible {
  type: string;
  visible: boolean;
}

const MainBlock = styled.main`
  min-height: 800px;
`;

const SectionBlock = styled.section`
  margin: 64px auto auto;
  width: 320px;
  height: 676px;
`;

const FormBlock = styled.form``;

const FormInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  font-weight: 400;
  color: #3e4042;
`;

const RegisterButton = styled.button`
  border-color: #1cbdea;
  background-color: #1cbdea;
  color: #fff;
  padding: 0 16px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  letter-spacing: -0.3px;
  margin-top: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const CheckBoxWrapper = styled.div`
  text-align: center;
  margin: 10px;
`;

// 이메일 형식 체크 정규식
const regExp_email: RegExp = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;

const RegisterPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [emailCheck, onChangeEmailCheck] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [termError, setTermError] = useState(false);

  // password type 변경용 state
  const [passwordType, setPasswordType] = useState<PasswordVisible>({
    type: 'password',
    visible: false,
  });
  const [passwordCheckType, setPasswordCheckType] = useState<PasswordVisible>({
    type: 'password',
    visible: false,
  });

  // password type 변경하는 함수
  const onChangePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const onChangePasswordCheckType = () => {
    setPasswordCheckType(() => {
      if (!passwordCheckType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const onChangeTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTermError(e.target.checked);
  }, []);

  // 이메일 형식 체크

  const [emailForm, setEmailForm] = useState(true);

  useEffect(() => {
    if (email === '') {
      return;
    }
    if (regExp_email.test(email)) {
      setEmailForm(true);
    } else {
      setEmailForm(false);
    }
  }, [email]);

  // 이메일 동일 확인 체크
  const [emailSame, setEmailSame] = useState(true);

  useEffect(() => {
    if (emailCheck === '') {
      return;
    }

    if (email !== emailCheck) {
      setEmailSame(false);
    } else {
      setEmailSame(true);
    }
  }, [email, emailCheck]);

  return (
    <MainBlock>
      <SectionBlock>
        <h1 style={{ fontSize: '26px' }}>회원가입</h1>
        <p style={{ marginBottom: '24px' }}>자신과 싸우세요</p>
        <div>
          <FormBlock>
            <FormInputBlock>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <FormInput
                id="email"
                name="email"
                type="text"
                placeholder="example@healtheat.com"
                onChange={onChangeEmail}
              />
              {emailForm ? null : (
                <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
              )}
            </FormInputBlock>
            <FormInputBlock>
              <FormLabel htmlFor="email_check">이메일 확인</FormLabel>
              <FormInput
                id="email_check"
                name="email_check"
                type="text"
                placeholder="example@healtheat.com"
                onChange={onChangeEmailCheck}
              />
              {emailSame ? null : (
                <ErrorMessage>이메일이 일치하지 않습니다.</ErrorMessage>
              )}
            </FormInputBlock>
            <FormInputBlock style={{ position: 'relative' }}>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <FormInput
                id="password"
                name="password"
                type={passwordType.type}
                placeholder="******"
                onChange={onChangePassword}
              />
              <EyesBlock onClick={onChangePasswordType}>
                {passwordType.visible ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}
              </EyesBlock>
            </FormInputBlock>
            <FormInputBlock style={{ position: 'relative' }}>
              <FormLabel htmlFor="password_check">비밀번호 확인</FormLabel>
              <FormInput
                id="password_check"
                name="password_check"
                type={passwordCheckType.type}
                placeholder="******"
                onChange={onChangePasswordCheck}
              />
              <EyesBlock onClick={onChangePasswordCheckType}>
                {passwordCheckType.visible ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}
              </EyesBlock>
            </FormInputBlock>
            <CheckBoxWrapper>
              <input type="checkbox" id="term" onChange={onChangeTerm} />
              <label htmlFor="term">크라디드의 말을 잘 들을껍니까?</label>
              {!termError && (
                <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
              )}
            </CheckBoxWrapper>
            <RegisterButton>가입하기</RegisterButton>
          </FormBlock>
        </div>
      </SectionBlock>
    </MainBlock>
  );
};

export default RegisterPage;

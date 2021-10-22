import styled from '@emotion/styled';

export const FormInput = styled.input`
  appearance: none;
  margin-top: 4px;
  width: 320px;
  padding: 13px 12px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  border: 1px solid #dee2e6;
  letter-spacing: -0.3px;
  border-radius: 4px;
  background-color: #fff;

  :focus {
    outline: none;
    border-color: #1cbdea;
  }

  ::placeholder {
    color: #a8abad;
  }
`;

export const EyesBlock = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  font-size: 22px;
  cursor: pointer;
  color: #939799;
`;

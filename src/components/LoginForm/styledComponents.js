import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 15px;
`

export const FormContainer = styled.form`
  width: 450px;
  box-shadow: 0px 4px 16px 4px #bfbfbf;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 64px 48px 64px 48px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 370px;
  }
`

export const LoginLogo = styled.img`
  width: 200px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 35px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;

  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #1e293b;
`

export const SubmitErr = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`

import { useState } from 'react';
import Button from './Button'; // Button 컴포넌트의 경로가 맞는지 확인
import { styled } from 'styled-components';
// Input 컴포넌트를 UI 라이브러리 또는 직접 정의한 것에서 가져와야 함
import Input from './Input'; // 경로는 실제 프로젝트 구조에 따라 수정

const ControlContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`; //Wrapper



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@'); //이메일 입력란에 @이 없으면 true
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
        <div className='flex flex-col gap-2 mb-6'>
          <Input
          label ="Email"
          type="email"
           invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        <Input
            label="Password"
            type="password"
             invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      <div className="flex justyfy-end gap-4">
        <button type="button" className="text-amber400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

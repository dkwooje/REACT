import React from 'react';

export const userData = {
  firstName: '태근', // feel free to replace the name value
  lastName: '김', // feel free to replace the name value
  title: '강사', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        할일 : {userData.firstName}과 {userData.lastName}을 여기에 출력
      </h2>
      <p>할일 : {userData.title}을 여기에 출력</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
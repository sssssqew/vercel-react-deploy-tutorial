import React, { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log('서버주소 @: ', process.env.REACT_APP_BASE_URL)

    fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: "react",
            email: "react@gmail.com",
            userId: "react",
            password: "react123@"  
        })
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setUser(result.newUser)
    })
  }, [])

  return (
    <div className="App">
      {user ? (
        <>
          <h1>회원정보</h1>
          <p>이름: {user.name}</p>
          <p>연락처: {user.email}</p>
          <p>아이디: {user.userId}</p>
        </>
      ) : "사용자정보 조회중..."}
    </div>
  );
}

export default App;

import React from 'react';



function Prop(props) {
  return <h2>نام کاربر: {props.username}</h2>;
}

function App() {
  const user = "محمد";
  return <UserProfile username={user} />;
}

export default Prop;

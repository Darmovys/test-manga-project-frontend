import React from 'react';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = React.useRef();
  const errRef = React.useRef();

  const [user, setUser] = React.useState('');
  const [validName, setValidName] = React.useState(false);
  const [userFocus, setUserFocus] = React.useState(false);

  const [pwd, setPwd] = React.useState('');
  const [validPwd, setValidPwd] = React.useState(false);
  const [pwdFocus, setPwdFocus] = React.useState(false);

  const [matchPwd, setMatchPwd] = React.useState('');
  const [validMatch, setValidMatch] = React.useState(false);
  const [matchFocus, setMatchFocus] = React.useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return <div></div>;
}

export default Register;

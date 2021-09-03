import authAPI from "@/api/auth";
import { SignupModel } from "@/model/authModel";
import { useCallback, useEffect, useState } from "react";

export const useInputBox = () => {
  const [info, setInfo] = useState({
    id: "",
    password: "",
    password2: "",
    email: "",
  });

  const [pwdValid, setPwdValid] = useState(true);
  const [empty, setEmpty] = useState(true);

  const checkEmpty = () => {
    for (let el in info) {
      let val = info[el];
      if (val == null || (val != null && val == "")) {
        setEmpty(true);
        return;
      }
    }
    setEmpty(false);
  };

  const checkPassword = () => {
    const { password, password2 } = info;

    if (password.length < 1 && password2.length < 1) {
      setPwdValid(true);
      return;
    }
    if (password == null || password.length < 1) {
      setPwdValid(false);
      return;
    }
    if (password2 == null || password2.length < 1) {
      setPwdValid(false);
      return;
    }
    if (password === password2) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [info.password, info.password2]); //비밀번호 일치 여부 판별

  useEffect(() => {
    checkEmpty();
  }, [info.id, info.email]); //빈칸 여부 판별

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInfo({
        ...info,
        [name]: value,
      });
    },
    [info]
  );

  return {
    empty,
    pwdValid,
    handleChange,
    info,
  };
};

export const useSignupButton = (empty: boolean, pwdValid: boolean, info) => {
  const [disabled, setDisable] = useState(true);

  useEffect(() => {
    if (!empty && pwdValid) {
      setDisable(false);
    }
  }, [empty, pwdValid]);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickSignup();
      //추후 개발 예정
    }
  };

  const signup = useCallback(async () => {
    const input = {
      username: info.id,
      password: info.password,
      email: info.email,
    };
    await authAPI.signup(input);
  }, [info]);

  const onClickSignup = () => {
    if (disabled) {
      return;
    }
    try {
      signup();
    } catch (e) {
      alert(e);
    }
    alert("회원가입 짜라란");
    window.location.href = "http://localhost:3000/login";
  };

  return {
    disabled,
    onKeyPress,
    onClickSignup,
  };
};

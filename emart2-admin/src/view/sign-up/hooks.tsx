import authAPI from "@/api/auth";
import { MSG } from "@/asset/constant";
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

export const useSignupButton = (
  empty: boolean,
  pwdValid: boolean,
  idValid: boolean,
  info
) => {
  const [disabled, setDisable] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>("");
  const [redirect, setRedirect] = useState<string>("/signup");
  const [isAlert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!empty && pwdValid && idValid) {
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
    try {
      setAlert(true);
      await authAPI.signup(input);
    } catch (err) {
      setMsg(MSG.ERROR);
      return;
    }
    setMsg("회원가입 성공!");
    setRedirect("/login");
  }, [info]);

  const onClickSignup = () => {
    if (disabled) {
      return;
    }
    signup();
  };

  return {
    disabled,
    onKeyPress,
    onClickSignup,
    msg,
    redirect,
    isAlert,
  };
};

export const useId = (info) => {
  const [idValid, setValidId] = useState(false);
  const [popupMsg, setMsg] = useState<string>("");
  const [onPopup, setPopup] = useState<boolean>(false);

  const checkId = async (id) => {
    setPopup(true);
    try {
      const res = await authAPI.checkId(id);
      if (!res) {
        setValidId(true);
        setMsg("사용가능한 아이디입니다.");
      } else {
        setValidId(false);
        setMsg("사용불가능한 아이디입니다.");
      }
    } catch (err) {
      setValidId(false);
      setMsg(MSG.ERROR);
    }
  };

  const onCheckId = () => {
    checkId(info.id);
  };
  return {
    onCheckId,
    idValid,
    onPopup,
    popupMsg,
  };
};

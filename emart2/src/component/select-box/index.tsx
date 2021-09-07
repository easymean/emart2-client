import React from "react";
import * as S from "./styles";

interface OptionProps {
  name: string;
  value: any;
}

interface SelectProps {
  name?: string;
  setData?: (e: any) => void;
  options: OptionProps[];
  placeholder: string;
}

const Select = ({ name, setData, options, placeholder }: SelectProps) => {
  const onClickHandler = (e) => {};
  return (
    <S.SelectBox name={name} onKeyUp={setData}>
      {options.length !== 0 ? (
        options.map((option, idx) => {
          return (
            <option value={option.value} key={idx}>
              {option.name}
            </option>
          );
        })
      ) : (
        <option>{placeholder}</option>
      )}
    </S.SelectBox>
  );
};

export default Select;

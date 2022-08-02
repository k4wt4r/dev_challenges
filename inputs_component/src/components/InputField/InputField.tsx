import React, { FC } from "react";
import * as S from "./InputField.style";

const InputField = ({
  label,
  value,
  onChange,
  error,
  type,
  placeholder,
  disabled = false,
  required = false,
  autoFocus = false,
  autoComplete = "off",
  heightContainer = "auto",
  widthInput,
  bgColorInput,
  borderColorInput,
  ...props
}) => {
  return (
    <S.InputFieldContainer
      style={{
        height: heightContainer,
        backgroundColor: bgColorInput,
      }}
    >
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        style={{
          border: borderColorInput,
        }}
      />
      {error && <div className="error">{error}</div>}
    </S.InputFieldContainer>
  );
};

export default InputField;

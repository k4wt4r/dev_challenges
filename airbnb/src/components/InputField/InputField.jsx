import React from "react";
import * as S from "./InputField.style";
import stays from "../../data/stays.json";

function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  inputWidth,
  bgColor,
  border,
  inputheight,
  ...props
}) {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(stays);
  const [searchResultsCount, setSearchResultsCount] = React.useState(
    stays.length
  );
  return (
    <S.StyledInputContainer>
      <label>{label}</label>
      <S.StyledInput
        type={type}
        placeholder={placeholder}
        inputWidth={inputWidth}
        inputheight={inputheight}
        border={border}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSearchResults(
            stays.filter((stay) => stay.city.includes(e.target.value))
          );
          setSearchResultsCount(
            stays.filter((stay) => stay.city.includes(e.target.value)).length
          );
        }}
      />
    </S.StyledInputContainer>
  );
}

export default InputField;

import { IconButton, Badge, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

export const QuickSearchButton = ({ onValueChange }) => {
  const inputRef = useRef();
  const [hasFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSearchClick = () => {
    inputRef.current.focus();
    setFocus(true);
  };

  const onChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onValueChange(value);
  };

  return (
    <div style={{ hasFocus, withValue: inputValue }}>
      <IconButton
        size="large"
        aria-label="show quixk search input"
        type="submit"
        onClick={onSearchClick}
        disabled={hasFocus || (!hasFocus && !!inputValue)}
      >
        <Badge>
          <SearchIcon />
        </Badge>
      </IconButton>
      <InputBase
        inputRef={inputRef}
        value={inputValue}
        placeholder="Search..."
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChange={onChange}
      />
    </div>
  );
};

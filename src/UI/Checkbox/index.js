import React from "react";

import styled from "styled-components";

const CheckboxWrapp = styled.input``;

const Checkbox = ({ checked, onChange }) => {
  return (
    <CheckboxWrapp type="checkbox" checked={checked} onChange={onChange} />
  );
};

export default Checkbox;

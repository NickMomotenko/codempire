import React from "react";

import styled from "styled-components";

const ImageWrapp = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
`;

const Image = ({ url, alt }) => {
  return <ImageWrapp url={url} alt={alt} />;
};

export default Image;

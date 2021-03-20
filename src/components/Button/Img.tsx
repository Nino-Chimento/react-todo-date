import React, { FC } from "react";
import styled from "styled-components";

export interface ImgProps {
  src: string;
  description?: string;
}

const StyledImg = styled.img<ImgProps>`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Img: FC<ImgProps> = ({ src, description }: ImgProps) => {
  return <StyledImg src={src} alt={description} />;
};

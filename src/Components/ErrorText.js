import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.span`
  display: block;
  color: #e74c3c;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
`;

const ErrorText = ({ text }) => <Container>{text}</Container>;

ErrorText.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorText;

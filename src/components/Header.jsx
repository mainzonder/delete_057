import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "./Container";
import { setTheme } from "../store/theme/theme-actions";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

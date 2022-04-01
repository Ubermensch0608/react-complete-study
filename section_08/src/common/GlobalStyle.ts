import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html{
        font-family: 'Noto Sans KR', sans-serif;
        font-size:16px;
        font-weight:500;
        background-color:#1f1f1f ;
    }

`;

export default GlobalStyle;

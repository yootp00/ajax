import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root{
        --bg: #17141f;
        --text: #efefef;
        --active: #dc2d43;
    }
    *{
        box-sizing: border-box;
        width:100px;
        padding: 0 15px;
    }
    body{
        background:var(--bg);
        font-size:15px;
    }
    a{
        color:#fff;
        text-decoration:none;
    }

`;

export default GlobalStyles;
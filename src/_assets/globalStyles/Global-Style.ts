import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle: any = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    div, header, section, main {
        margin: 0;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    :root{
        --bg-color: #fff;
    }

    body {
        background-color: var(--bg-color);
    }


`;

export default GlobalStyle;
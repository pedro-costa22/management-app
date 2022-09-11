import styled, {createGlobalStyle} from 'styled-components'

//fonts 
import { spaceGrotesk } from '../fonts/fonts';


const GlobalStyle: any = createGlobalStyle`
    @import url(${spaceGrotesk});
    

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
        --bg-white: #F9F9F9;
        --color-primary: #A862FF;
        --color-secondary: #C97FFF;
    }

    body {
        background-color: var(--bg-white);
        font-family: 'Space Grotesk', sans-serif;
    }


`;

export default GlobalStyle;
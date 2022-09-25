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
        --bg-layout: #F2EDF3;
        --color-primary: #A862FF;
        --color-secondary: #C97FFF;
        --text: rgba(0, 0, 0, 0.7);
        --lilas-default: #A55FFF;
        --blue-default: #399AE6;
        --green-default: #3CD8BF;
    }

    body {
        background-color: var(--bg-white);
        font-family: 'Roboto', sans-serif;

    }


`;

export default GlobalStyle;
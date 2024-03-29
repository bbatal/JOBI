import { createGlobalStyle } from 'styled-components';
import gorditaRegular from './fonts/gorditaRegular.otf';
import gorditaBold from './fonts/gorditaBold.otf';

const GlobalStyle = createGlobalStyle`
    /* Normalize */
    html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}a,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}
    
    .clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0;}
    
    html { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; max-width: 1800px; margin: 0 auto; }
    
    *, *:before, *:after {box-sizing: inherit}
    
    .sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding: 0; white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden;}

    /* GOOGLE FONTS */
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');

    @font-face {
        font-family: "Gordita";
        src: local("GorditaRegular"),
        url(${gorditaRegular}) format("opentype");
    }

    @font-face {
        font-family: "GorditaBold";
        src: local("GorditaBold"),
        url(${gorditaBold}) format("opentype");
    }


    /* GENERAL STYLES */
    /* colors */
    :root {
        --primary-darkGreen: #244034;
        --primary-lightGreen: #d2f34c;
        --primary-grassGreen: #00bf58;
        --primary-gray: #c4c4c4;

        --secondary-gray: #eff6f3;
        --secondary-beige: #f8fde4;
        --secondary-brown: #755146;
        --secondary-black: #000;
        --secondary-green: #31795a;

        --tertiary-lightGray: #f5f5f5;
    }

    h1, 
    h2, 
    h3 {
        font-family: "EB Garamond";
        position: relative;
        z-index: 15;
        padding: 0;
        margin: 0;
    }

    h2,
    h4,
    h5,
    h6 {
        font-family: "GorditaBold";
        position: relative;
        z-index: 15;
        padding: 0;
        margin: 0;
    }

    p,
    h3 {
        font-family: "Gordita";
        position: relative;
        z-index: 15;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    /* responsive image */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .wrapper {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }

    /* temporary global styles */
    section {
        padding: 0rem 6.3rem;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

`;

export default GlobalStyle;
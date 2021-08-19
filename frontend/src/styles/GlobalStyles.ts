import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --gray-100: #C1C1C1;
  --gray-200: #E2E2E2;
  --gray-300: #9D9D9D;
  --gray-700: #707070;
  --gray-800: #868686;
  --gray-900: #383838;
  --cyan-gray: #adc0c4;
  --background: #F7F7F7;
  --green: #B5C401;
  --green-900: #27C383;
  --red: #ff6666;
  --white: #FFFFFF;
  --shape: #EBEBEB;
  --spinner: #5ed1a2;

}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  "Helvetica Neue", Arial, sans-serif;
}

html,body,#root{
  height: 100vh;


}

body {
  background: var(--background);
}

html{
  @media(max-width: 1080px){
    font-size: 93.75% 
  }
  @media(max-width: 720px){
    font-size: 87.5% 
  }
}

*, button, input {
  border: 0;
  outline: 0;
}

button,input{
  cursor: pointer;
}

`

// ФАЙЛ С КОРНЕВЫМ КОМПОНЕНТОМ ДЛЯ РЕДАКТИРОВАНИЯ ПОДКЛЮЧАЕМЫХ ТЕСТОВЫХ КОМПОНЕНТОВ

import { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom";

import { Wrapper, Block } from "./taskComponents";
import { config } from "./config";

function App() {
  return config.map(({ imgSrc, imgAlt, callback, content, userData, ui }) => {
    return (
      <Wrapper mouseEnterCallbak={callback}>
        <Block
          key={ui}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          content={content}
          userData={userData}
        />
      </Wrapper>
    );
  });
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

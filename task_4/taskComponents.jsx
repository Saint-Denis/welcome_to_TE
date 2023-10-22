// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState } from "react";

export const Wrapper = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block = ({ imgSrc, imgAlt, content, userData }) => {
  if (!!imgSrc && !!imgSrc) return <img src={imgSrc} alt={imgAlt} />;
  if (!!content) return <p>{content}</p>;
  if (!!userData)
    return (
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    );
};

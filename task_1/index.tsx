// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { Component, memo, PureComponent } from "react";
import { IUser, IProps } from "./interface";

export const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

export const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => {
    console.log("SecondComponent has been updated");

    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.user !== nextProps.user) return true;
  }
);

export class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps) {
    if (nextProps.user !== this.props.user) return false;
  }
  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}

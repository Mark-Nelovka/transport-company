import { Button } from "./Button.styled";

interface IButton {
  children: string;
}

export const ButtonComponent = ({ children }: IButton) => {
  return <Button>{children}</Button>;
};

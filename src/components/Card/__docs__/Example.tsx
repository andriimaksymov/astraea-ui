import { FC } from "react";
import Card from "../Card";
import { CardProps } from "../../../../types";

const Example: FC<CardProps> = ({ elevation = 1, children, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card elevation={elevation} {...props}>
        {children}
      </Card>
    </div>
  );
};

export default Example;

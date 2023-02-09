import React from "react";
import { Greet1 } from "../Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet1>) => {
  return (
    <div>
      {"CustomComponent :"}
      {props.name}
      {props.messageCount}
      {props.isLoggedIn}
    </div>
  );
};

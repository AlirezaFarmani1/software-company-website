import React from "react";

//set type for Container
type TContainer = {
  children: React.ReactNode;
};

export default function Container({ children }: TContainer) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

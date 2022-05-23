import HeaderWrapper from "@containers/HeaderWrapper/HeaderWrapper";

import * as React from "react";

type Layout = {
  children: any;
};

const Layout = ({ children }: Layout) => {
  return (
    <>
      <HeaderWrapper></HeaderWrapper>
      {children}
    </>
  );
};

import React from "react";

const Layout = ({ children }: any) => {
    return (
      <>
        {/*<Navbar category={filterCategories} cartData={cartData} menuData={menuData} className="z-[99999]" />*/}
        <main>{children}</main>
        {/*  <Footer  QuickLinkData={QuickLinkData}  SupportData={SupportData} />*/}
      </>
    );
  };
  
  export default Layout;
import React from "react";
import Navbar from "../Navbar/Navbar";

type Props = {
    children: React.ReactNode
 }

// React functional component
const Layout: React.FC<Props> = ( {children} ) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }
  export default Layout;
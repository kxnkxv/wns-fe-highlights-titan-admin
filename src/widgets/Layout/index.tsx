'use client'
import {FC, ReactNode} from "react";
import styled from "@emotion/styled";
import Header from "@wns/widgets/Header";
import Footer from "@wns/widgets/Footer";

const LayoutWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return(
    <LayoutWrapper>
      <Header/>
      {children}
      <Footer/>
    </LayoutWrapper>
  )
};

export default Layout;
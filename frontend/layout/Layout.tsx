import React, { ReactElement } from "react";
import supabaseClient from "../config/client";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header supabaseClient={supabaseClient} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

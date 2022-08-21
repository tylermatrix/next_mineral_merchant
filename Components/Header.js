import React from "react";
import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Mineral Merchant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    </div>
  );
}

export default Header;

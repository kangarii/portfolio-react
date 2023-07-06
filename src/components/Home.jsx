import React from "react";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center text-white my-10 mt-32 px-7">
      <img
        src="https://cdn.discordapp.com/attachments/404590674370101248/1126432294916345926/urang.png"
        className="w-80"
        alt=""
      />
      <h1 className="font-semibold text-2xl">Hey, I'm Ari Gunawan</h1>
      <h1 className="font-semibold text-base my-3 text-center">
        IT Support & FronEnd Dev based on,
        <span className="border-b ml-1">Serang - Banten Indonesia.</span>
      </h1>
      <p className=" text-sm text-left lg:px-32">
        I'm self taught engineer with high enthusiast of Internet Networking and
        FrontEnd Dev. Internet Networking is my main skill. i love building some
        internet network topology, torubleshoot some thing about internet
        networking, configuring a networking hardware and software.
      </p>
    </div>
  );
}

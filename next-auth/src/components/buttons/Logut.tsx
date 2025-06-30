"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      redirect: false,
      callbackUrl: "/"
    });

    setTimeout(() => {
      const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
      const CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
      const returnTo = encodeURIComponent("http://localhost:3000/");
      const logoutUrl = `https://${AUTH0_DOMAIN}/v2/logout?client_id=${CLIENT_ID}&returnTo=${returnTo}&federated`;
      window.location.href = logoutUrl;
    }, 500);
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Çıkış Yap
    </button>
  );
}
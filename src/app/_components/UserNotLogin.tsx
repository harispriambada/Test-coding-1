"use client";

import Link from "next/link";

export default function UserNotLogin() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col max-w-3xl gap-5">
        <p>Maaf anda belum login, silahkan login terlebih dahulu...</p>
        <div className="flex justify-center">
          <Link
            href={"/signup"}
            className="px-3 py-2 text-white text-sm rounded-md bg-primary hover:bg-primary/90"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

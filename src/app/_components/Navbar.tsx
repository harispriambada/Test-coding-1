"use client";
import React from "react";

import { FormOutlined, UserOutlined } from "@ant-design/icons";
import { Flex } from "antd";

import { Avatar } from "antd";
import Link from "next/link";
import { useUser } from "../_context/UserLoginContext";

const boxStyle: React.CSSProperties = {
  width: "100%",
  padding: "1rem 1rem",
  height: 90,
  borderRadius: 6,
};

const logoStyle: React.CSSProperties = {
  fontSize: "2rem",
  color: "#6EC207",
};

const Navbar: React.FC = () => {
  const { user } = useUser();

  const activeUser = user.at(0)?.username;

  return (
    <nav className="container mx-auto ">
      <Flex gap="middle" align="start" vertical>
        <Flex style={boxStyle} justify={"space-between"} align={"center"}>
          <div className="flex gap-3 items-center">
            <FormOutlined size={26} style={logoStyle} />
            <p className="font-semibold leading-3 tracking-tighter text-xl text-gray-700">
              Tugas_Coding 1.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            {user.length > 0 && (
              <div className="flex items-center gap-1">
                <Avatar size={24} icon={<UserOutlined />} />
                <p className="font-semibold leading-3 tracking-tighter text-sm">
                  {activeUser}
                </p>
              </div>
            )}
            {user.length === 0 && (
              <Link
                href={"/signup"}
                className="px-3 py-2 text-white text-sm rounded-md bg-primary hover:bg-primary/90"
              >
                Login
              </Link>
            )}
          </div>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;

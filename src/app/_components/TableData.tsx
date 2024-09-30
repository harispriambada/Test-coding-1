"use client";
import type { TableColumnsType } from "antd";
import { Divider, Table } from "antd";
import React, { useState } from "react";
import { useUser } from "../_context/UserLoginContext";
import UserNotLogin from "./UserNotLogin";

interface DataType {
  key: React.Key;
  domains: string[];
  alpha_two_code: string;
  web_pages: string[];
  name: string;
  country: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Code Negara",
    dataIndex: "alpha_two_code",
  },
  {
    title: "Negara",
    dataIndex: "country",
  },
  {
    title: "Website",
    dataIndex: "web_pages",
  },
  {
    title: "Domain",
    dataIndex: "domains",
  },
];

export default function TableData({ data }: { data: DataType[] }) {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const dataWithKey = data.map((item) => {
    return { ...item, key: item.name };
  });

  const dataFilter = dataWithKey.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (user.length === 0) return <UserNotLogin />;

  return (
    <>
      <div className=" flex justify-center items-center gap-3 w-full  mt-2  mb-5">
        <label className="text-lg leading-3 tracking-tight font-medium text-black ">
          Search :
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2 p-2 border border-primary rounded-md bg-transparent outline-none focus:border-2 text-sm font-medium tracking-wide "
          placeholder="Search berdasarkan nama dan country..."
        />
      </div>
      <div className="border border-primary rounded-md shadow-md mb-20  ">
        <Divider>Daftar Informasi Universitas</Divider>
        <Table<DataType>
          columns={columns}
          dataSource={dataFilter}
          size="middle"
          className="px-1"
        />
      </div>
    </>
  );
}

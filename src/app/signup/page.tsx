"use client";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useUser } from "../_context/UserLoginContext";

type FieldType = {
  id?: number;
  username?: string;
  password?: string;
};

const SignUp: React.FC = () => {
  const router = useRouter();
  const { setUser } = useUser();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const newUser = { ...values, id: +new Date() };
    setUser((prev) => [...prev, newUser]);
    router.push("/");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    const { errorFields } = errorInfo;
    const errorMessage = errorFields.at(0)?.errors.at(0);
    alert(errorMessage);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen  ">
      <h1 className="text-xl font-semibold text-black">Login TugasCoding1</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className="mx-auto  w-full max-w-xl flex flex-col justify-center gap-3  "
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          className="flex flex-col"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ border: "1px solid #6EC207" }} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password style={{ border: "1px solid #6EC207" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#6EC207" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;

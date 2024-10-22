import { Link } from "react-router-dom";

import {
  HomeOutlined,
  ShoppingCartOutlined,
  SnippetsFilled,
  UserOutlined,
} from "@ant-design/icons";

import { MenuProps } from "antd";

import { ThemeButton } from "@/layouts/header/components/theme-button/index.tsx";

export const homeMenuItem: MenuProps["items"] = [
  {
    key: "home",
    label: <Link to="/home">Home</Link>,
    icon: <HomeOutlined />,
  },
];

export const leftMenuItems: MenuProps["items"] = [
  {
    key: "bookList",
    label: <Link to="/book">Books</Link>,
    icon: <SnippetsFilled />,
  },
];

export const middleMenuItems: MenuProps["items"] = [
  {
    key: "theme-button",
    label: <ThemeButton />,
  },
  
];

export const rightMenuItems: MenuProps["items"] = [
  {
    key: "account-login",
    label: <Link to="/auth/login">Sign In</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "account-register",
    label: <Link to="/auth/register">Register</Link>,
    icon: <UserOutlined />,
  },
];

export const shoppingCart: MenuProps["items"] =[
  {
    key: "shoppingCart",
    label: <Link to="/shoppingCart">Shopping Cart</Link>,
    icon: <ShoppingCartOutlined />,
  },
]

import { Layout, Menu } from "antd";
import {
  homeMenuItem,
  leftMenuItems,
  middleMenuItems,
  rightMenuItems,
  shoppingCart,
} from "@/layouts/header/consts/menu-items";
import { LogoutButton } from "@/features/login-page/hooks/useLogoutUser";
import "@/assets/layouts-styles/header.css";
import useUser from "@/common/users/useUser";

const { Header } = Layout;

export const LandingPageHeader = () => {
  const { user } = useUser();

  const isLoggedIn = !!user;

  return (
    <Header className="header">
      <div className="header__content">
            
      <Menu
            mode="horizontal"
            theme="light"
            items={homeMenuItem}
            className="home-item"
          />
        {isLoggedIn ? (
        <Menu
        mode="horizontal"
        theme="light"
        items={leftMenuItems}
        className="left-menu"
      />
        ) : null}

        <Menu
          mode="horizontal"
          theme="light"
          items={middleMenuItems}
          className="middle-menu"
        />

        {isLoggedIn ? (
          <LogoutButton />
        ) : (
        <Menu
          mode="horizontal"
          theme="light"
          items={rightMenuItems}
          className="right-menu"
          />
      )}
      
    {isLoggedIn ? (
      <Menu
        mode="horizontal"
        theme="light" 
        items={shoppingCart}
        className="shopping-cart"
      />
    ) : null}
      </div>
    </Header>
  );
};

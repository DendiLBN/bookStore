import { Layout } from "antd";

import { LandingPageRouting } from "@/routes/Routing";

import "@/assets/global-styles/content.css";

const { Content } = Layout;

export const LandingPageContent = () => {
  return (
    <>
      <Content className="landing__page-content">
        <LandingPageRouting />
      </Content>
    </>
  );
};

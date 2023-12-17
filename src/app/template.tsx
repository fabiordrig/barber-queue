"use client";

import { ConfigProvider, Layout, theme } from "antd";

const { Footer, Content } = Layout;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Content>{children}</Content>
        <Footer>Barber Queue</Footer>
      </Layout>
    </ConfigProvider>
  );
}

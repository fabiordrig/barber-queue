"use client";
import { Card, Flex, Grid } from "antd";

export default function Layout({ children }: { children: React.ReactNode }) {
  const screen = Grid.useBreakpoint();
  return (
    <Flex gap="large" style-={{ height: "100%" }} justify="space-around" align="flex-end">
      <Card
        style={{
          width: "80%",
          marginTop: screen.sm ? "10%" : "50%",
        }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        title="Fila"
      >
        {children}
      </Card>
    </Flex>
  );
}

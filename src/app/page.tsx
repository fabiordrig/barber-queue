"use client";

import { Card, ConfigProvider, theme } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorBgBase: "dark",
            colorBgLayout: "dark",
          },
        }}
      >
        <Card title="Test" extra={<a>more</a>}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Card>
      </ConfigProvider>
    </main>
  );
}

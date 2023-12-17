"use client";

import { getQueue } from "@/app/service";
import { Queue } from "@/app/types";
import { Space, Typography } from "antd";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const QueuePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [queue, setQueue] = useState<Queue>();

  const fetchQueue = async () => setQueue(await getQueue(id));

  useEffect(() => {
    fetchQueue();
  }, []);

  return (
    <Space direction="vertical" size="large">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography.Title level={2}>Pessoas na fila</Typography.Title>
        <Typography.Title level={2}>{queue?.count ?? 0}</Typography.Title>
      </div>
    </Space>
  );
};

export default QueuePage;

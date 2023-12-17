"use client";

import { getQueue, updateQueue } from "@/app/service";
import { Queue } from "@/app/types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Typography, message } from "antd";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const QueueAdminPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [queue, setQueue] = useState<Queue>();
  const [loading, setLoading] = useState(false);

  const fetchQueue = async () => {
    try {
      setQueue(await getQueue(id));
    } catch (error) {
      message.error("Erro ao buscar a fila");
    }
  };

  const updateAddCount = async () => {
    setLoading(true);
    try {
      const count = queue ? queue.count + 1 : 1;
      await updateQueue(id, count);
      fetchQueue();
      message.success("Pessoa adicionada na fila");
    } catch (error) {
      message.error("Erro ao atualizar a fila");
    } finally {
      setLoading(false);
    }
  };

  const updateRemoveCount = async () => {
    setLoading(true);
    try {
      const count = queue && queue.count > 0 ? queue.count - 1 : 0;
      await updateQueue(id, count);
      fetchQueue();
      message.success("Pessoa removida da fila");
    } catch (error) {
      message.error("Erro ao atualizar a fila");
    } finally {
      setLoading(false);
    }
  };

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
        <Space size="large">
          <Button type="text" loading={loading} icon={<PlusOutlined />} onClick={updateAddCount} />
          <Typography.Title level={2}>{queue?.count ?? 0}</Typography.Title>
          <Button
            type="text"
            loading={loading}
            icon={<MinusOutlined />}
            onClick={updateRemoveCount}
          />
        </Space>
      </div>
    </Space>
  );
};

export default QueueAdminPage;

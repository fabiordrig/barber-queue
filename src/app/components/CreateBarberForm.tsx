"use client";

import { Button, Form, Input, message } from "antd";
import { FC, useState } from "react";
import { createBarber } from "../service";
import { Barber, NewBarber } from "../types";

const CreateQueueScreen: FC<{ setBarber: (_: Barber) => void }> = ({ setBarber }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: NewBarber) => {
    setLoading(true);
    try {
      const barber = await createBarber(values);
      setBarber(barber);
    } catch (_) {
      message.error("Por favor, preencha todos os campos corretamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: "Por favor, insira o nome!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor, insira o email!",
          },
          {
            type: "email",
            message: "Por favor, insira um email válido!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Criar Fila
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateQueueScreen;

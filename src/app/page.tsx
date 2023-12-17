"use client";

import { Card, Flex, Grid, Space, Typography } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import CreateBarberForm from "./components/CreateBarberForm";
import { Barber } from "./types";

const CreateQueueScreen: FC = () => {
  const [barber, setBarber] = useState<Barber>();

  const screen = Grid.useBreakpoint();

  return (
    <Flex gap="large" style-={{ height: "100%" }} justify="space-around" align="center">
      <Card
        style={{
          width: "80%",
          marginTop: screen.sm ? "10%" : "50%",
        }}
        title="Criar Fila"
      >
        {barber ? (
          <Space direction="vertical">
            <Typography.Text>
              Fila criada com sucesso! Não perca o link abaixo, ele é o seu acesso à fila.
            </Typography.Text>
            <Typography.Link href={`${window.location.origin}/queue/${barber.id}/admin`}>
              {window.location.origin}/queue/{barber.id}/admin
            </Typography.Link>

            <Typography.Text>
              Passe esse link para seus clientes, eles poderão ver a fila
            </Typography.Text>
            <Link href={`${window.location.origin}/queue/${barber.id}`}>
              <Typography.Link>
                {window.location.origin}/queue/{barber.id}
              </Typography.Link>
            </Link>
          </Space>
        ) : (
          <CreateBarberForm setBarber={setBarber} />
        )}
      </Card>
    </Flex>
  );
};

export default CreateQueueScreen;

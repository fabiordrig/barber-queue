"use client";

import { Card, Flex } from "antd";
import { FC, useState } from "react";
import CreateBarberForm from "./components/CreateBarberForm";
import { Barber } from "./types";

const CreateQueueScreen: FC = () => {
  const [barber, setBarber] = useState<Barber>(); // [1

  return (
    <Flex gap="large" style-={{ height: "100%" }} justify="space-around" align="flex-end">
      <Card
        style={{
          width: "80%",
          marginTop: "50%",
        }}
        title="Criar Fila"
      >
        <CreateBarberForm setBarber={setBarber} />
      </Card>
    </Flex>
  );
};

export default CreateQueueScreen;

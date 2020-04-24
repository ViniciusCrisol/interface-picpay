import React from "react";

import { Container, Option, Title, Img } from "./styles";

import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Universitário! Cadastre-se e ganhe mais cachback",
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Indique amigos e os salve das filas",
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Parcele boletos em até 12 vezes",
    bgColor: "tomato",
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Alguma dúvida sobre o aplicativo?",
    bgColor: "#ba2f76",
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
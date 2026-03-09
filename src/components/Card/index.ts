import { Card as CardBase } from "./Card.tsx";
import { CardHeader } from "./CardHeader.tsx";
import { CardBody } from "./CardBody.tsx";
import { CardFooter } from "./CardFooter.tsx";

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

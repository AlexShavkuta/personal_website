import React from "react";
import {
  Card as CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

export default function Card({ header, content, years, technologies }) {
  return (
    <CardContainer className="mx-auto max-w-[400px] bg-blue-300 text-creme-100 ">
      <CardHeader className="flex gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
        <div className="flex flex-col">
          <p className="text-md">{header}</p>
          <p className="text-small text-default-500">{years}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {technologies.map((current) => {
          return (
            <Chip className="mx-1 bg-teal-400/10 text-teal-300 text-sm font-medium my-2 px-1 py-px rounded-full dark:bg-green-900 dark:text-green-300">
              {current}
            </Chip>
          );
        })}
      </CardFooter>
    </CardContainer>
  );
}

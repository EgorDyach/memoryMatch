import Flex from "@components/Flex";
import { Title } from "@components/Title";
import { Text } from "@components/Typography";
import { fieldSizes } from "./constants";
import Button from "@components/button/Button";

export const VersusPage = () => {
  return (
    <>
      <Title $top="25px" type="default">
        1 vs 1
      </Title>
      <Flex $top="30px" direction="column">
        <Flex justify="center">
          <Text $size="title" $shadow={{ color: "#072234" }}>
            Field Size
          </Text>
        </Flex>
        {fieldSizes.map((item, index) => (
          <Button
            key={index}
            shadow="full"
            type="blue"
            $top="medium"
            disabled={!item.active}
          >
            <Text $size="subtitle">{item.title}</Text>
          </Button>
        ))}
      </Flex>
    </>
  );
};

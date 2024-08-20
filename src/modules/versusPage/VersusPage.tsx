import Flex from "@components/Flex";
import { ItemTitle, Text } from "@components/Typography";
import { fieldSizes } from "./constants";
import Button from "@components/button/Button";
import { Title } from "@components/Title";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localGameActions } from "@store/localGame";
import { usePlaySFx } from "@hooks/usePlaySFx";

export const VersusPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const soundSfx = usePlaySFx();
  const { pathname } = useLocation();
  return (
    <>
      <Title $top="25px" type="default">
        <ItemTitle>1 vs 1</ItemTitle>
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
            onClick={() => {
              dispatch(localGameActions.setTimer(null));
              soundSfx();
              navigate(
                `/game?size=${item.size}&backpath=${pathname}&moves=${item.moves}&timer=${item.timer}`
              );
            }}
          >
            <Text $size="subtitle">{item.title}</Text>
          </Button>
        ))}
      </Flex>
    </>
  );
};

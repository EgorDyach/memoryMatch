import { BlurryLoadingImage } from "@components/BlurryLoadingImage";
import Flex from "@components/Flex";
import { requestMapData$ } from "@lib/api/map";
import { requestShopData$ } from "@lib/api/shop";
import { requestUser$ } from "@lib/api/user";
import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import image from "/img/loader.webp";
import preview from "/img/loader_preview.webp";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { uiActions } from "@store/ui";
import { TopBlur } from "@layouts/mainLayout/MainLayout";
import { textShadow } from "@lib/theme/shadow";
import { LoaderButton } from "./LoaderButton";
import { LoadedProgressBar } from "./LoaderProgressBar";
const LoaderWrapper = styled(Flex)<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;
  z-index: ${(props) => (props.$isOpen ? 1000000 : -1)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  height: ${(props) => (props.$isOpen ? "unset" : 0)};
  transition: z-index 0.3s ease, opacity 0.3s ease;
`;

const StyledImage = styled(BlurryLoadingImage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

const StyledContent = styled(Flex)`
  z-index: 1000001;
  padding: 120px 0 40px;
  height: 100vh;
  position: fixed;
`;

const StyledBlur = styled(TopBlur)`
  z-index: 10000001;
`;

const StyledTitle = styled.h1`
  font-size: 83px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  ${textShadow("#C73CDC", 5.74, 2.87)}
`;

interface LoaderProps {
  isOpen: boolean;
}

export const Loader: FC<LoaderProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    });
    (async () => {
      dispatch(uiActions.setRequestStarted("user"));
      dispatch(uiActions.setRequestStarted("map"));
      dispatch(uiActions.setRequestStarted("shop"));
      await requestUser$(123)
        .then((res) => {
          dispatch(uiActions.setUser(res));
          dispatch(uiActions.setRequestFinished("user"));
          console.log("finish");
        })
        .catch((e) => {
          setError(e);
        });
      await requestShopData$(123)
        .then(() => {
          console.log("finish");
          dispatch(uiActions.setRequestFinished("shop"));
        })
        .catch((e) => {
          setError(e);
        });
      await requestMapData$(123)
        .then(() => {
          console.log("finish");
          dispatch(uiActions.setRequestFinished("map"));
        })
        .catch((e) => {
          setError(e);
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error)
      enqueueSnackbar(error, {
        variant: "error",
      });
  }, [error]);

  return (
    <LoaderWrapper $isOpen={isOpen}>
      <StyledBlur />
      <StyledImage image={image} preview={preview} />
      <StyledContent justify="space-between" direction="column" align="center">
        <StyledTitle>Memory Match</StyledTitle>
        <LoaderButton />
        <LoadedProgressBar />
      </StyledContent>
    </LoaderWrapper>
  );
};

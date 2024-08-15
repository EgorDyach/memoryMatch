import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";
import { uiSelectors } from "@store/ui";

export const LoaderLayout: FC<PropsWithChildren> = ({ children }) => {
  const isLoaderOpen = useSelector(uiSelectors.getIsLoaderOpen);

  return (
    <>
      <Loader isOpen={isLoaderOpen} />
      {children}
    </>
  );
};

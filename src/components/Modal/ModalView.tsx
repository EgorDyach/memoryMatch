import { FC } from "react";
import { SubHeader } from "@components/Typography";
import { StyledModalContent, StyledModalWrap } from "./ModalStyles";
import IconButton from "@components/button/IconButton";
import Flex from "@components/Flex";
import { ModalViewProps } from "./helpers";
import CrossIcon from "@components/icons/CrossIcon";
import styled from "styled-components";

const ModalTitle = styled(SubHeader)`
  color: #fff;
  -webkit-text-stroke: 0.81px #092e46;
  text-shadow: 0px 2px #092e46;
`;

const CancelButton = styled(IconButton)`
  border-radius: 5px;
  border: 2.29px solid #b92222;
  box-shadow: 0px 2.29px 0px 0px #b92222;
`;

const CancelContainer = styled.div`
  border-radius: 6px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1.14px solid #092e46;
  box-shadow: 0px 2.29px 0px 0px #092e46;
`;

const MarkupWrapper = styled(Flex)`
  background-color: #ddeaee;
  box-shadow: 0px 1.67px 0px 0px #ffffff40 inset,
    0px -1.67px 0px 0px #00000040 inset, 0px 0.84px 2.92px 0px #00000040,
    0px 2px 0px 0px #0000001a;
  padding: 25px 15px;
  border-radius: 10px;
  color: #092e46;
  overflow: auto;
`;

export const ModalView: FC<ModalViewProps> = (props) => {
  const { title, description, hideModal, visible, isMarkup } = props;
  return (
    <StyledModalWrap $visible={visible}>
      <StyledModalContent>
        <Flex justify="center">
          <Flex>
            <ModalTitle $top="small">{title}</ModalTitle>
          </Flex>
          <CancelContainer>
            <CancelButton
              type="danger"
              onClick={() => hideModal && hideModal()}
              icon={<CrossIcon size={10} />}
            />
          </CancelContainer>
        </Flex>
        {isMarkup && (
          <MarkupWrapper>
            <div
              dangerouslySetInnerHTML={{ __html: String(description) }}
            ></div>
          </MarkupWrapper>
        )}
        {!isMarkup && description}
      </StyledModalContent>
    </StyledModalWrap>
  );
};

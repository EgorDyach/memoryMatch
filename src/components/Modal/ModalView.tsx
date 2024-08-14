import { FC } from "react";
import { SubHeader } from "@components/Typography";
import { StyledModalContent, StyledModalWrap } from "./ModalStyles";
import IconButton from "@components/button/IconButton";
import Flex from "@components/Flex";
import { ModalViewProps } from "./helpers";
import CrossIcon from "@components/icons/CrossIcon";
import styled from "styled-components";
import { shadow, textShadow } from "@lib/theme/shadow";
import { content } from "@lib/theme/colors";

const ModalTitle = styled(SubHeader)`
  color: #fff;
  ${textShadow(content.secondary)}
`;

const CancelButton = styled(IconButton)`
  border-radius: 5px;
  border: 2.29px solid #b92222;
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
  ${shadow("full")}
  padding: 25px 15px;
  border-radius: 10px;
  color: ${content.secondary};
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

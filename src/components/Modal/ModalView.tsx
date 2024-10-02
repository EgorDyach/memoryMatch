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
import { language } from "@constants/language";
import { uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";
import { ModalsTitle } from "@type/language";

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

const ContentWrapper = styled(Flex)`
  background-color: #ddeaee;
  ${shadow("full")}
  padding: 25px 15px;
  border-radius: 10px;
  color: ${content.secondary};
  overflow: auto;
`;

const MarkupDiv = styled.div`
  overflow-y: scroll;
  * {
    font-size: 14px;
    margin: 0;
    line-height: 1.25em;
  }

  h2 {
    margin-top: 17px;
  }
  h1 {
    font-size: 16px;
  }

  h1:not(:first-child) {
    margin-top: 20px;
  }
`;

export const ModalView: FC<ModalViewProps> = (props) => {
  const { title, description, hideModal, visible, isMarkup, withCancel } =
    props;
  const lang = useSelector(uiSelectors.getLanguage);
  return (
    <StyledModalWrap $visible={visible}>
      <StyledModalContent>
        <Flex justify="center">
          <Flex>
            <ModalTitle $top="small">
              {language[lang]["modals"][title as ModalsTitle]}
            </ModalTitle>
          </Flex>
          {withCancel && (
            <CancelContainer>
              <CancelButton
                type="danger"
                onClick={() => hideModal && hideModal()}
                icon={<CrossIcon size={10} />}
              />
            </CancelContainer>
          )}
        </Flex>
        <ContentWrapper>
          {isMarkup && (
            <MarkupDiv
              dangerouslySetInnerHTML={{ __html: String(description) }}
            ></MarkupDiv>
          )}
          {!isMarkup && description}
        </ContentWrapper>
      </StyledModalContent>
    </StyledModalWrap>
  );
};

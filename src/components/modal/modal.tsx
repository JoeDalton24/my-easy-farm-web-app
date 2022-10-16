import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../buttons/defaultButton";

interface ClosableModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  close: (value: boolean) => void;
  show: boolean;
  children: React.ReactNode;
}

export const ClosableModal: React.FC<ClosableModalProps> = ({
  show,
  close,
  children,
  ...htmlProps
}) => {
  return (
    <Container show={show} {...htmlProps}>
      <ModalContent>
        {children}
        <StyledDefaultButton onClick={() => close(show)}>
          Close
        </StyledDefaultButton>
      </ModalContent>
    </Container>
  );
};

const Container = styled.div<{ show?: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 99999;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StyledDefaultButton = styled(DefaultButton)`
  width: 20%;
`;

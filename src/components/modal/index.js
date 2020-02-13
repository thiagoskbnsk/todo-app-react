import React from "react";

import Card from "../card";

import { ModalWrapper, ModalBody } from "./styled";

function Modal({ title, subtitle }) {
  return (
    <ModalWrapper>
      <ModalBody>
        <Card title={title} subtitle={subtitle}>
          <div>
            <label>Teste</label>
            <input type="text" />
          </div>
        </Card>
      </ModalBody>
    </ModalWrapper>
  );
}

export default Modal;

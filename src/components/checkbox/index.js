import React from "react";

import { CheckInput, CheckCustom } from "./styled";

import { CheckOutlined } from "@material-ui/icons";

function Checkbox({ id, onChange }) {
  return (
    <>
      <CheckInput id={id} onChange={onChange} type="checkbox" />
      <CheckCustom>
        <CheckOutlined />
      </CheckCustom>
    </>
  );
}

export default Checkbox;

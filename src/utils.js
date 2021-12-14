import { message } from "antd";

export const successMessage = title => {
  message.success({
    content: title,
    className: "custom-message success",
    duration: 3,
  });
};

export const warningMessage = title => {
  message.warning({
    content: title,
    className: "custom-message warning",
    duration: 3,
  });
};

export const errorMessage = title => {
  message.error({
    content: title,
    className: "custom-message error",
    duration: 3,
  });
};

import { message } from 'antd';
export const successMessage = (msg: string) => {
  message.success(msg);
};

export const errorMessage = (msg: string) => {
  message.error(msg);
};

export const warning = (msg: string) => {
  message.warning(msg);
};

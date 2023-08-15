import { GLOBAL } from "./types";

export const init = (type, data) => {
  return {
    type: `${type}_INIT`,
    data,
  };
};

export const finish = (type) => {
  return {
    type: `${type}_FINISH`,
  };
};

export const success = (type, payload, label, record, details) => {
  return {
    type: `${type}_SUCCESS`,
    payload,
    label,
    record,
    details,
  };
};

export const error = (payload) => {
  return {
    type: GLOBAL.GLOBAL_ERROR,
    payload,
  };
};

import { createAction } from '@reduxjs/toolkit';

const createCompositeAction = <RequestPayload, SuccessPayload, ErrorPayload>(
  moduleName: string,
  actionName: string,
) => {
  const requestName = `${moduleName}/${actionName}Request`;
  const successName = `${moduleName}/${actionName}Success`;
  const errorName = `${moduleName}/${actionName}Error`;

  return {
    request: createAction<RequestPayload>(requestName),
    success: createAction<SuccessPayload>(successName),
    error: createAction<ErrorPayload>(errorName),
  };
};

export default createCompositeAction;

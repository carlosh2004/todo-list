import { Response } from 'express';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  details?: string | null | unknown;
}

function success<T>(res: Response, data: T, message: string = 'Success', status: number = 200): Response {
  const responseBody: ApiResponse<T> = {
    success: true,
    message,
    data,
  };

  return res.status(status).send(responseBody);
}

function error(
  res: Response,
  message: string = 'Error',
  status: number = 500,
  details: Error | string | unknown | null = null,
): Response {
  const newDetails: string | unknown | null =
    details instanceof Error ? details.message : details || 'Internal Server Error';

  const responseBody: ApiResponse<null> = {
    success: false,
    message,
    details: newDetails,
  };

  return res.status(status).send(responseBody);
}

export default {
  success,
  error,
};

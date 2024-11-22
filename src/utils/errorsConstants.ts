export const ERROR_CODES = {
    // Client-side errors (400 range)
    BAD_REQUEST: 400,                 // 400 Bad Request
    TOKEN_EXPIRED: 401,                    // 401 Unauthorized
    TOKEN_INVALID: 401,                    // 401 Unauthorized
    PERMISSION_DENIED: 403,                // 403 Forbidden
    UNAUTHORIZED_ACCESS: 403,              // 403 Forbidden
    NOT_FOUND_ERROR: 404,                  // 404 Not Found
    USER_NOT_FOUND: 404,                   // 404 Not Found
    RESOURCE_CONFLICT: 409,                // 409 Conflict
    INVALID_CREDENTIALS: 422,              // 422 Unprocessable Entity
    PASSWORD_RESET_FAILED: 422,            // 422 Unprocessable Entity
    API_RATE_LIMIT: 429,                   // 429 Too Many Requests
  
    EMAIL_SEND_ERROR: 500,                 // 500 Internal Server Error
    DATABASE_CONNECTION_ERROR: 500,        // 500 Internal Server Error
    UNEXPECTED_ERROR: 500,                 // 500 Internal Server Error
    FILE_UPLOAD_ERROR: 500,                // 500 Internal Server Error
    INSUFFICIENT_BALANCE: 500,             // 500 Internal Server Error
    NETWORK_ERROR: 500,                    // 500 Internal Server Error
    FORBIDDEN_ACTION: 500,                 // 500 Internal Server Error
    TRANSACTION_FAILED: 500,               // 500 Internal Server Error
  };
  
  export const ERROR_MESSAGES = {
    // Client-side error messages
    NUMBER_IS_ALREADY_REGISTERED:'Number is already registered',
    OLD_PASSWORD_INCORRECT:'Old password incorrect',
    PASSWORD_MUST_BE_SAME:'New password & Confirm password must be same',
    PASSWORD_MUST_BE_DIFFERENT_FROM_OLD:'Password must  be different from old ',
    VALIDATION_ERROR: 'Input data validation failed',
    AUTHENTICATION_ERROR: 'Authentication failed Invalid credentials',
    TOKEN_EXPIRED: 'The token has expired, Please login again',
    TOKEN_INVALID: 'The provided token is invalid',
    PERMISSION_DENIED: 'You do not have permission to perform this action',
    UNAUTHORIZED_ACCESS: 'Invalid Password',
    NOT_FOUND_ERROR: 'Requested resource not found',
    USER_NOT_FOUND: 'User not found',
    DATA_NOT_FOUND: 'Data not found',
    RESOURCE_CONFLICT: 'The resource already exists or is in conflict with the current state',
    INVALID_CREDENTIALS: 'The credentials provided are invalid',
    PASSWORD_RESET_FAILED: 'Failed to reset the password, Please try again',
    API_RATE_LIMIT: 'You have exceeded the allowed number of API calls, Please wait and try again',
    USER_EXIST:'User already exist',
    TASKS_NOT_FOUND: 'Tasks not found',
    SUB_TASKS_NOT_FOUND: 'Sub Tasks not found',
    INVALID_UUID:'Invalid UUID format',
    EMAIL_REQUIRED:'Email is required',

    //Not found
    TASK_NOT_FOUND :'Task not found',
    PARENT_TASK_NOT_FOUND :'Parent task not found',


    // Server-side error messages
    EMAIL_SEND_ERROR: 'Failed to send email',
    DATABASE_CONNECTION_ERROR: 'Unable to connect to the database',
    UNEXPECTED_ERROR: 'An unexpected error occurred, Please try again later',
    FILE_UPLOAD_ERROR: 'An error occurred during file upload, Please try again',
    INSUFFICIENT_BALANCE: 'Insufficient balance to complete the transaction',
    NETWORK_ERROR: 'A network error occurred, Please check your connection',
    FORBIDDEN_ACTION: 'This action is forbidden',
    TRANSACTION_FAILED: 'The transaction could not be completed Please try again later',
    INVALID_OTP:'Invalid OTP',
    MAXIMUM_LIMIT_BREACHED : 'Maximum limit breached',
    TEMPORARILY_BLOCKED:'User is temporarily blocked, Try again after some time',
    OTP_EXPIRED:'OTP Expired',
    EMAILS_REQUIRED:'Emails array is required',
    CONNECTION_ERROR:'Connection error',
    INTERNAL_SERVER_ERROR:'Internal server error',
    INVALID_EMAIL:'Invalid email',
    INVALID_PASSWORD:'Invalid password',
    NOT_INVITED:'User is not invited',
    ORGANIZATION_NOT_FOUND:'Organization not found',
    OTP_NOT_VERIFIED: 'OTP verification is required to proceed. Please verify your OTP to continue',
    PROJECT_NOT_FOUND: "Project not found",
    BOARD_COLUMN_NOT_FOUND: "Board column not found",
    PROJECT_DOESNOT_BELONG_TO_TASK: "Project does not belong to task",

  };
// export const ERROR_USER_SYNC = 'appErrors.errorUserSync';
// export const ERROR_CREATING_GROUP = 'home.createGroupError';
// export const ERROR_JOIN_GROUP = 'home.joinGroupError';
// export const ERROR_ALREADY_JOIN_GROUP = 'home.alreadyJoinGroupError';

export const ERRORS = [
    {
        actionName: 'joinGroup',
        status: 500,
        errorMessage: 'home.joinGroupError'
    },
    {
        actionName: 'joinGroup',
        status: 400,
        errorMessage: 'home.alreadyJoinGroupError'
    },
    {
        actionName: 'createGroup',
        status: 500,
        errorMessage: 'home.createGroupError'
    },
    {
        actionName: 'login',
        status: 400,
        errorMessage: 'login.errorLoginBackend'
    },
    {
        actionName: 'register',
        status: 400,
        errorMessage: 'login.errorLoginBackend'
    },
]
import { environment } from "src/environments/environment";

export const SERVER_URL = environment.server_url;

const LOGIN = '/auth/login';
const REGISTER = '/auth/register';
const CHECK_TOKEN = '/auth/check-token';

const USER = '/user';

const CREATE_GROUP = '/group/create';
const JOIN_GROUP = (idGroup: string) => `/group/add-player/${idGroup}`;
const SEND_ADMIN = '/group/send-admin';
const VALORIZE_PLAYER = '/group/valorize-player';
const GET_GROUP = (idGroup: string) => `/group/${idGroup}`;

const MATCH_CREATE = (idGroup: string) => `/match/create/${idGroup}`;
const MATCH_JOIN = '/match/join';
const MATCH_QUIT = '/match/quit';
const MATCH_ORDER = (matchId: string) => `/order-match/${matchId}`;
const MATCH_GENERATE_HISTORY = '/match/generate-history';

const NOTIFICATION_CREATE = '/notification/create';
const NOTIFICATION_READ = (notificationId: string ) => `/notification/read/${notificationId}`;

export const PATHS = {
    LOGIN,
    REGISTER,
    CHECK_TOKEN,

    CREATE_GROUP,
    JOIN_GROUP,
    SEND_ADMIN,
    VALORIZE_PLAYER,
    GET_GROUP,

    MATCH_CREATE,
    MATCH_JOIN,
    MATCH_QUIT,
    MATCH_ORDER,
    MATCH_GENERATE_HISTORY,

    NOTIFICATION_CREATE,
    NOTIFICATION_READ,

    USER
}
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
/*
 *
 * HomePage constants
 *
 */

export const LOAD_RECORDS_START = 'app/App/LOAD_RECORDS_START';
export const LOAD_RECORDS_SUCCESS = 'app/App/LOAD_RECORDS_SUCCESS';
export const LOAD_RECORDS_ERROR = 'app/App/LOAD_RECORDS_ERROR';

export const SET_PRACTITIONER_START = 'app/App/SET_PRACTITIONER_START';
export const SET_PRACTITIONER_SUCCESS = 'app/App/SET_PRACTITIONER_SUCCESS';

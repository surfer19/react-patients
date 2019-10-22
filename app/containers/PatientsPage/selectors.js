import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the patientsPage state domain
 */

const selectPatientsPageDomain = state => state.patientsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PatientsPage
 */

const makeSelectPatientsPage = () =>
  createSelector(
    selectPatientsPageDomain,
    substate => substate,
  );

export default makeSelectPatientsPage;
export { selectPatientsPageDomain };

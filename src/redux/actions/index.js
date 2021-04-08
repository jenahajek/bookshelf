import {
  UPDATE_SEARCH_QUERY,
  ADD_STATE,
  REMOVE_STATE,
  UPDATE_FILTER_STATE,
  RESET_FILTER_STATE,
  RESET_QUERY_STATE,
  RESET_ALL_FILTER_STATES,
} from "../constants/action-types";

export function updateSearchQuery(payload) {
  return { type: UPDATE_SEARCH_QUERY, payload };
}

export function addState(payload) {
  return { type: ADD_STATE, payload };
}

export function removeState(payload) {
  return { type: REMOVE_STATE, payload };
}

export function updateFilterState(payload) {
  return { type: UPDATE_FILTER_STATE, payload };
}

export function resetFilterState(payload) {
  return { type: RESET_FILTER_STATE, payload };
}

export function resetQueryState(payload) {
  return { type: RESET_QUERY_STATE, payload };
}

export function resetAllFilterStates(payload) {
  return { type: RESET_ALL_FILTER_STATES, payload };
}

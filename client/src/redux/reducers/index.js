import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CenterReducer from "./CenterReducer";
import PharmacyReducer from "./PharmacyReducer";
import VaccinReducer from "./VaccinReduce";
import CitizenReducer from "./CitizenReducer";
import OperatorReducer from "./OperatorReducer";
import MessageReducer from "./MessageReducer";
import OpenDaysReducer from "./OpenDaysReducer";
import PivotReducer from "./PivotReducer";

import ErrorsReducer from "./ErrorsReducer";
export default combineReducers({
  auth: AuthReducer,
  citizens:CitizenReducer,
  vaccins:VaccinReducer,
  centers: CenterReducer,
  pharmacies: PharmacyReducer,
  operators:OperatorReducer,
  openDays: OpenDaysReducer,
  errors: ErrorsReducer,
  messages: MessageReducer,
  pivot: PivotReducer
});

import { HouseholdWhereInput } from "./HouseholdWhereInput";
import { HouseholdOrderByInput } from "./HouseholdOrderByInput";

export type HouseholdFindManyArgs = {
  where?: HouseholdWhereInput;
  orderBy?: Array<HouseholdOrderByInput>;
  skip?: number;
  take?: number;
};

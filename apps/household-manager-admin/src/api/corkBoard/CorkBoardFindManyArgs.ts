import { CorkBoardWhereInput } from "./CorkBoardWhereInput";
import { CorkBoardOrderByInput } from "./CorkBoardOrderByInput";

export type CorkBoardFindManyArgs = {
  where?: CorkBoardWhereInput;
  orderBy?: Array<CorkBoardOrderByInput>;
  skip?: number;
  take?: number;
};

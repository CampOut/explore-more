import { CorkBoard as TCorkBoard } from "../api/corkBoard/CorkBoard";

export const CORKBOARD_TITLE_FIELD = "topic";

export const CorkBoardTitle = (record: TCorkBoard): string => {
  return record.topic || String(record.id);
};

import { Thread as TThread } from "../api/thread/Thread";

export const THREAD_TITLE_FIELD = "topic";

export const ThreadTitle = (record: TThread): string => {
  return record.topic || String(record.id);
};

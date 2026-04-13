/**
 * 過去の開催情報を表すドメイン型です。
 */
export type EventRecord = {
  id: string;
  date: string;
  place: string;
  organizerId: string;
};

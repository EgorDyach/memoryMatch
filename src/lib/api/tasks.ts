import { Task } from "@type/tasks";
import { request } from ".";

export const requestTasks$ = async (): Promise<Task[]> => {
  return await request.get(`/quests`);
};

export const requestMyTasks$ = async (): Promise<Task[]> => {
  return await request.get(`/quests/my`);
};

export const requestCompleteTask$ = async (questId: number): Promise<void> => {
  return await request.post(`/quests/complete`, {
    questId,
  });
};

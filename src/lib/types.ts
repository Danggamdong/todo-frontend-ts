export type NewTodoEvent = {
	title: string;
	description: string;
};

export type RemoveTodoEvent = {
	id: string;
};

export type UpdateTodoEvent = {
	id: string;
	title: string;
	description: string;
	finishedAt: number;
	isFinished: boolean;
};

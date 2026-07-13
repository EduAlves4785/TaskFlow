import type { TaskStatus } from './types';

export interface CardProps {
    title: string;
    description: string;
    status: TaskStatus;
    date: Date;
}

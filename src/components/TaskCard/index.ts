import type { Task } from './TaskInterface';

export interface CardProps extends Task {
    onComplete: () => void;
}

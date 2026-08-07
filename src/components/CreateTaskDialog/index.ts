export interface CreateTaskDialogProps {
    open: boolean;
    onClose: () => void;
    onCreate: (title: string, description: string) => void;
}
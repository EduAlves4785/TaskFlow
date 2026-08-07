import type { CreateTaskDialogProps } from './index';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function CreateTaskDialog({ open, onClose, onCreate }: CreateTaskDialogProps) {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Criar tarefa</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onCreate(title, description);
                    setTitle('');
                    setDescription('');
                }} id="task-form">
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="titulo"
                        name="titulo"
                        label="Título"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="descricao"
                        name="descricao"
                        label="Descrição"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={onClose}>Cancelar</Button>
                <Button disabled={!title.trim() || !description.trim()} type="submit" form="task-form">
                    Criar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
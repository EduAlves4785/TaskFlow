import { Paper, Container, Stack, Button, Divider, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useState } from 'react';
import type { Task } from '../../components/TaskCard/TaskInterface';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Tarefa de exemplo",
            description: "Esta é uma tarefa de exemplo para demonstração",
            status: "TODO",
            date: new Date()
        },
        {
            id: 2,
            title: "Tarefa em andamento",
            description: "Esta tarefa está em andamento",
            status: "IN_PROGRESS",
            date: new Date(),
        }
    ]);

    //Mudar status para DONE
    function handleCompleteTask(taskId: number) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: "DONE" } : task
            )
        );
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    function handleCreateTask() {
        const newTask: Task = {
            id: tasks.length + 1,
            title: title,   
            description: description,
            status: "TODO",
            date: new Date(),
        };
        setTasks(prev => [...prev, newTask]);
        setTitle('');
        setDescription('');
        setOpen(false);
    }

    const sortedTasks = [...tasks].sort((a, b) => {
        const statusOrder = {
            "TODO": 1,
            "IN_PROGRESS": 2,
            "DONE": 3
        };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <Container maxWidth="lg" sx={{
            minHeight: '80vh',
            my: 4,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
        }}>
            <Paper elevation={3} sx={{
                p: 4,
            }}>
                <Stack spacing={2} sx={{
                    alignItems: "center",
                }}>
                    <Typography variant="h4" sx={{
                        color: 'primary.main'
                    }}>
                        TaskFlow
                    </Typography>
                    <Typography variant="body1">
                        Organize suas tarefas com facilidade
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <Button onClick={handleClickOpen} fullWidth={true} startIcon={<AddCircleIcon />} >
                            Criar tarefa
                        </Button>
                        <Button startIcon={<ListIcon />} variant='outlined' sx={{
                            boxShadow: 2
                        }}>Ver tarefas</Button>
                    </Stack>
                    <Divider sx={{ width: "100%" }} />
                    <Typography variant="h6">
                        Bem-vindo ao TaskFlow!
                    </Typography>
                    <Typography variant="body1">
                        Projeto desenvolvido para fins de estudo, utilizando React, TypeScript e Material UI.
                    </Typography>
                </Stack>
            </Paper>
            <Paper elevation={0} sx={{
                mt: 4,
            }}>
                <Stack direction="row" spacing={2} sx={{
                    alignItems: "center",
                }}>
                    {sortedTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            {...task}
                            onComplete={() => handleCompleteTask(task.id)}
                        />
                    ))}
                </Stack>
            </Paper>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Criar tarefa</DialogTitle>
                <DialogContent>
                    <form id="task-form">
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
                    <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" form="task-form" onClick={handleCreateTask}>
                        Criar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>


    );
}
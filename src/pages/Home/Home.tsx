import { Paper, Container, Stack, Button, Divider, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useState } from 'react';
import type { Task } from '../../components/TaskCard/TaskInterface';

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
                        <Button fullWidth={true} startIcon={<AddCircleIcon />} >
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
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            {...task}
                            onComplete={() => handleCompleteTask(task.id)}
                        />
                    ))}
                </Stack>
            </Paper>
        </Container>


    );
}
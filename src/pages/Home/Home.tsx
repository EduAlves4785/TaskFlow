import { Paper, Container, Stack, Button, Divider, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';

export default function Home() {
    return (
        <Container maxWidth="md" sx={{
            minHeight: '80vh',
            my: 4,
        }}>
            <Paper elevation={3} sx={{
                my:5,
                mx: 5,
                p:3
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
                        <Button startIcon={<ListIcon />} variant='outlined'  sx={{
                            boxShadow: 2
                        }}>Ver tarefas</Button>
                    </Stack>
                    <Divider sx={{ width: "100%" }}/>
                    <Typography variant="h6">
                        Bem-vindo ao TaskFlow!
                    </Typography>
                    <Typography variant="body1">
                        Projeto desenvolvido para fins de estudo, utilizando React, TypeScript e Material UI.
                    </Typography>
                </Stack>
            </Paper>

        </Container>


    );
}
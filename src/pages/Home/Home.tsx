import { Paper, Container, Stack, Button, Divider, Typography } from '@mui/material';


export default function Home() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{
                p: 2
            }}>
                <Stack spacing={2} sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    
                }}>
                    <Typography variant="h4">
                        TaskFlow
                    </Typography>
                    <Typography variant="body1">
                        Organize suas tarefas com facilidade
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Criar tarefa</Button>
                        <Button variant="outlined">Ver tarefas</Button>
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
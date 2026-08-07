import { Button, Card, CardContent, CardHeader, Chip, Divider, Stack, Typography } from '@mui/material'
import type { CardProps } from './index'
import type { TaskStatus } from './types'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LoopIcon from '@mui/icons-material/Loop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TaskCard({ id, title, description, status, date, onComplete }: CardProps) {

    function renderChip(type:TaskStatus) {
        switch(type) {
            case 'TODO':
                return <Chip size='small' avatar={<HistoryToggleOffIcon />} label="A fazer" color="default" />
            case 'IN_PROGRESS':
                return <Chip size='small' avatar={<LoopIcon color="warning" />} label="Em andamento" color="warning" />
            case 'DONE':
                return <Chip size='small' avatar={<CheckCircleIcon/>} label="Concluído" color="success" />
        }
    }

    return (
        <Card sx={{
            width: 350,
            height: 250,
        }}>
            <CardHeader title={title} />
            <CardContent>
                <Typography sx={{
                    height: 50,
                    mb:2
                }}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={2} sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    {renderChip(status)}
                    <Typography>Data: {date.toLocaleDateString()}</Typography>
                </Stack>
                <Divider sx={{ mt: 2 }} />
                <Stack direction="row" spacing={2} sx={{
                   p:1,
                   justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Button>Editar</Button>
                    <Button disabled={status === "DONE"} onClick={onComplete} variant="outlined">
                        Concluir
                    </Button>
                </Stack>

            </CardContent>
        </Card>
    );
}
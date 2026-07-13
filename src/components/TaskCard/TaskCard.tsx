import { Button, Card, CardContent, CardHeader, Chip, Divider, Stack, Typography } from '@mui/material'
import type { CardProps } from './index'
import type { TaskStatus } from './types'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TaskCard({ title, description, status, date }: CardProps) {

    function renderChip(type:TaskStatus) {
        switch(type) {
            case 'A fazer':
                return <Chip avatar={<HistoryToggleOffIcon />} label="A fazer" color="default" />
            case 'Em andamento':
                return <Chip avatar={<AutorenewIcon/>} label="Em andamento" color="primary" />
            case 'Concluído':
                return <Chip avatar={<CheckCircleIcon/>} label="Concluído" color="success" />
        }
    }

    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <Typography sx={{
                    mb:2
                }}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={2} sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    {renderChip(status)}
                    <Typography>Date: {date.toLocaleDateString()}</Typography>
                </Stack>
                <Divider sx={{ mt: 2 }} />
                <Stack direction="row" spacing={2} sx={{
                   p:1,
                   justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Button>Editar</Button>
                    <Button variant="outlined">
                        Concluir
                    </Button>
                </Stack>

            </CardContent>
        </Card>
    );
}
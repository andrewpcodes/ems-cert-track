import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const navigate = useNavigate();

    return (
        <Grid style={{marginTop: '65px'}}>
            <Button onClick={() => {
                navigate('/boston-ems')
            }}>Boston EMS</Button>
            <Button onClick={() => {
                navigate('/boston-university')
            }}>Boston University</Button>
            <Button onClick={() => {
                navigate('/ems-academy')
            }}>EMS Academy</Button>
        </Grid>
    )
}

export default Courses
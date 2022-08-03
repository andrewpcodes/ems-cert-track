import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import DnsIcon from '@mui/icons-material/Dns';
import PublicIcon from '@mui/icons-material/Public';

export const courses = [
    {
        id: 0,
        icon: <PublicIcon />,
        label: 'Courses',
        route: '/courses',
    },
    {
        id: 1,
        icon: <PeopleIcon />,
        label: 'Boston EMS',
        route: '/boston-ems',
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'Boston University',
        route: '/boston-university',
    },
    {
        id: 3,
        icon: <ImageIcon />,
        label: 'EMS Academy',
        route: '/ems-academy',
    },
]
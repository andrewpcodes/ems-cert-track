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
        coordinates: {
            latitude: 42,
            longitude: -71,
        },
    },
    {
        id: 1,
        icon: <PeopleIcon />,
        label: 'Boston EMS',
        route: '/boston-ems',
        coordinates: {
            latitude: 42.33443341004974,
            longitude: -71.07411795231975,
        },
        factoids: {
            city: 'Boston, MA',
            levelsOffered: 'Approved Levels: EMT',
            region: 'Region IV',
            expiration: 'MA DPH accreditation expires 11/1/2023',
        },
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'Boston University',
        route: '/boston-university',
        coordinates: {
            latitude: 42.35231393693149,
            longitude: -71.10543018318185,
        },
        factoids: {
            city: 'Boston, MA',
            levelsOffered: 'Approved Levels: EMT',
            region: 'Region IV',
            expiration: 'MA DPH accreditation expires 6/1/2023',
        },
    },
    {
        id: 3,
        icon: <ImageIcon />,
        label: 'EMS Academy',
        route: '/ems-academy',
        coordinates: {
            latitude: 42.25155326554675,
            longitude: -71.00369200489789,
        },
        factoids: {
            city: 'Springfield, MA',
            levelsOffered: 'Approved Levels: EMT',
            region: 'Region III',
            expiration: 'MA DPH accreditation expires 8/1/2025',
        },
    },
]
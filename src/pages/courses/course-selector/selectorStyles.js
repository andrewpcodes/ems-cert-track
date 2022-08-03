export const selectorStyles = {
    drawer: {
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    list: {
        paddingTop: 10,
        paddingBottom: '150%',
    },
    listitem: {
        '&:hover': {
            backgroundColor: 'blue',
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '10px',
    },
    text: {
        '& span': {
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};
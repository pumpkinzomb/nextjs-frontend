import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type LogoProps = {
    LogoComponent: () => JSX.Element;
    serviceName: string;
};

const Logo = ({ LogoComponent, serviceName }: LogoProps) => {
    return (
        <Stack direction="row" sx={{ alignItems: 'center', height: '100%', marginLeft: 2 }}>
            <LogoComponent />
            <Typography variant={'subtitle1'} sx={{ marginLeft: 2, fontWeight: 'bold' }}>
                {serviceName}
            </Typography>
        </Stack>
    );
};

export default Logo;

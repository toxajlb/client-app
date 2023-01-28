
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress";

export default function Player() {
    

    return (
        <div className={styles.player}>
            <IconButton>
                
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=>{}}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={()=>{}}/>
        </div>  
    )
}

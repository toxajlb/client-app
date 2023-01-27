import { Grid, Card, IconButton } from "@mui/material";
import { ITrack } from "../types/tracks";
import styles from "../styles/TrackItem.module.scss";
import { Pause, PlayArrow, Delete } from "@mui/icons-material";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    

    return (
        <Card className={styles.track}>
            <IconButton>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>  
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <IconButton style={{marginLeft: 'auto'}}>
                <Delete />
            </IconButton>
        </Card>
    )
}

export default TrackItem;
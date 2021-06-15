import Button from "@material-ui/core/Button";  
import Card from "@material-ui/core/Card"; 
import CardActionArea from "@material-ui/core/CardActionArea"; 
import CardActions from "@material-ui/core/CardActions"; 
import CardContent from "@material-ui/core/CardContent"; 
import CardMedia from "@material-ui/core/CardMedia"; 
import {makeStyles} from "@material-ui/core/styles"; 
import Typography from "@material-ui/core/Typography"; 

    
const useStyles = makeStyles({
    img: {
        height:150,

    }
 });

const CustomCard = () => {
    const classes = useStyles();
    return(
        <Card>
            <CardActionArea>
            <CardMedia
            className={classes.img}
            image="D:\GSR project assignment\admin\public\logo192.png"
            >
            </CardMedia>
            <CardContent>
                <Typography variant="h5">title</Typography>
                <Typography variant="body2">details</Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size ="small" color="primary">Share</Button>
                <Button size ="small" color="primary" onClick={()=>{}}>Delete</Button>
            </CardActions>
        </Card>
    );
}
export default CustomCard;
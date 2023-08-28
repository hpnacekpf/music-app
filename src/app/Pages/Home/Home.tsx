import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice from "../../Store/Music/musicSlice.ts";
import { RootState } from "../../Store"
import { createStyles, rem } from "@mantine/core";
import {Carousel} from '3d-react-carousal';
import './home.css'

type DataSlider = {
  description: string;
  imageUrl: string;
  key: string;
  order: number;
  thumbnail: string;
  title: string;
  url: string;
}

const useStyles = createStyles((theme) => ({
  boxContent: {
    width: '100%',
    margin: '16px auto',
  },
  boxSlider: {
    width: '100%'
  }
}));

function HomeComponent() {
  const {classes} = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.music);

  useEffect(() => {
    dispatch(musicSlice.actions.getData());
  }, [dispatch]);

  const dataSlider: Array<any> = [];
  if (data.showcase) {
    data.showcase.map((item: DataSlider) => {
      dataSlider.push(<img  src={item.imageUrl} alt="" />);
    });
  }

  if (loading && !data) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <div className={classes.boxContent}>
        <div className={classes.boxSlider}>
          <Carousel slides={dataSlider} autoplay={true} interval={3000}/>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

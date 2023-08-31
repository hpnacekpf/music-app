import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice from "../../Store/Music/musicSlice.ts";
import { RootState } from "../../Store"
import { createStyles } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Carousel} from '3d-react-carousal';
import './home.css'
import Loading3Dot from "../../Components/Partials/Icons/Loading3Dot.tsx";

type DataSlider = {
  description: string;
  imageUrl: string;
  key: string;
  order: number;
  thumbnail: string;
  title: string;
  url: string;
}

const useStyles = createStyles(() => ({
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

  const dataSlider: Array<unknown> = [];
  if (data.showcase) {
    data.showcase.map((item: DataSlider, index: number) => {
      if (item.imageUrl) {
        dataSlider.push(<img onClick={() => {console.log(index)}} src={item.imageUrl} alt="" />);
      } else {
        dataSlider.push(<img onClick={() => {console.log(index)}} src={item.thumbnail} alt="" />);
      }
    });
  }

  if (loading && !data) {
    return (
      <div className="flex justify-center">
        <Loading3Dot setColor="white" setWidth="30" setHeight="30"/>
      </div>
    )
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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice from "../../Store/Music/musicSlice.ts";
import { RootState } from "../../Store"
import SliderComponent from "./Slider/Slider.tsx";
import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  boxContent: {
    width: 'calc(100% - 314px)',
    margin: '16px 32px',
  }
}));

function HomeComponent() {
  const {classes} = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.music);
  console.log(data);

  useEffect(() => {
    dispatch(musicSlice.actions.getData());
  }, [dispatch]);

  if (loading && !data) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <div className={classes.boxContent}>
        <div className="box-slider">
          <SliderComponent dataSlider={data.showcase}/>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice from "../../Store/Music/musicSlice.ts";
import { RootState } from "../../Store"
import { createStyles } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
    return <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <circle cx="4" cy="12" r="3"><animate id="a" begin="0;b.end+0.25s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33"/></circle><circle cx="12" cy="12" r="3"><animate begin="a.begin+0.1s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33"/></circle><circle cx="20" cy="12" r="3"><animate id="b" begin="a.begin+0.2s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33"/></circle>
    </svg>;
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

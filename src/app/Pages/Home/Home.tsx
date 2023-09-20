import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice from "../../Store/Music/musicSlice.ts";
import { RootState } from "../../Store"
import { createStyles } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Carousel } from '3d-react-carousal';
import Loading3Dot from "../../Components/Partials/Icons/Loading3Dot.tsx";
import PlayListCover from "../../Components/Partials/PlayListCover.tsx";

interface DataSlider {
  description: string
  imageUrl: string
  key: string
  order: number
  thumbnail: string
  title: string
  url: string
}

interface typePlaylistCover {
  items: []
  title: string
  key: string
  thumbnail: string
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
        <div className="mt-8">
          <main className="inset-0 box-border pt-[32px] pb-[96px] px-[5vw]">
            {/* Playlist */}
            <div className="mt-8">
              {
                data.topicEvent
                  ?
                  data.topicEvent.map((e: any, i: number) => (
                    <div key={i}>
                      <div
                        className="flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mt-9 mb-3 uppercase">
                        {(e.groupName === "") ? "" : (e.groupName)}
                      </div>
                      <div
                        className="grid grid-cols-5 gap-x-6 gap-y-11">
                        {
                          e.listPlaylist.map((element: typePlaylistCover, index: number) => (
                            <PlayListCover
                              key={index}
                              title={element.title}
                              link={`/playlist/${element.key}`}
                              thumbnail={element.thumbnail}
                            />
                          ))
                        }
                      </div>
                    </div>
                  ))
                  :
                  <div className="flex justify-center">
                    <Loading3Dot setColor="white" setWidth="30" setHeight="30"/>
                  </div>
              }
            </div>
            {/* End Playlist */}
          </main>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { music } from '../../Store/Music/music.ts';

function HomeComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.music);

  useEffect(() => {
    console.log(1);
    dispatch(music.actions.getDataMusicStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <div>Data {data}</div>
      </div>
    );
  }
  return (
    <div>HomePage</div>
  );
}

export default HomeComponent;

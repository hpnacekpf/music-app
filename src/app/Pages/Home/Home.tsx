import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { music } from '../../Store';
import {RootState} from "../../Store";

function HomeComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.music);
  console.log(data);

  useEffect(() => {
    console.log(1);
    dispatch(music.actions.getDataMusicStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div>
        <div>Data {data}</div>
      </div>
    );
  }
}

export default HomeComponent;

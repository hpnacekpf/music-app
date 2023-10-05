import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../Services/api.ts"
import DetailPlaylistInfo from "../../Components/Partials/DetailPlaylistInfo.tsx"
import TrackListDetailPlaylist from "../../Components/Partials/TrackPlaylist"
import { setPlaylistSong } from "../../Store/Audio/audioSlice.ts"
import Loading3Dot from "../../Components/Partials/Icons/Loading3Dot.tsx";
import { useDispatch } from "react-redux";

interface PlaylistType {
  thumbnailM: string
  title: string
  artists: []
  description: string
  like: number
  contentLastUpdate: number
  songs: []
}

const DetailPlaylist: React.FC = () => {

  const [dataDetailPlaylist, setDataDetailPlaylist] = useState<any>()

  const params = useParams<{playlistId: string}>()

  const dispatch = useDispatch()

  useEffect(() => {
    (
      async () => {
        if(params.playlistId) {
          const detailPlaylist:any = await api.getDetailPlaylist(params.playlistId)
          console.log('detailPlaylist', detailPlaylist.playlist);
          setDataDetailPlaylist(detailPlaylist.playlist)
          dispatch(setPlaylistSong(detailPlaylist.playlist.songs))
        }
      }
    )()
  }, [params, dispatch])

  return (
    <>
      {/* {console.log(dataDetailPlaylist)} */}
      <div className="mx-[10vw] mt-16 mb-24">
        {
          dataDetailPlaylist
          ?
          <>
            <DetailPlaylistInfo
              thumbnailM={dataDetailPlaylist.thumbnail}
              title={dataDetailPlaylist.title}
              artists={dataDetailPlaylist.artists}
              total={dataDetailPlaylist.songs.length.toString()}
              description={dataDetailPlaylist.description}
              like={10}
              contentLastUpdate={dataDetailPlaylist.dateModify}
            />
            <TrackListDetailPlaylist items={dataDetailPlaylist.songs}/>
          </>
          :
          <div className="flex justify-center">
            <Loading3Dot setColor="white" setWidth="30" setHeight="30"/>
          </div>
        }
      </div>
    </>
  )
}

export default DetailPlaylist

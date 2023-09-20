import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../Services/api.ts"
import DetailPlaylistInfo from "../../Components/Partials/DetailPlaylistInfo.tsx"
import TrackListDetailPlaylist from "../../Components/Partials/TrackPlaylist"
import { setPlaylistSong } from "../../Store/Audio/audioSlice.ts"
import Loading3Dot from "../../Components/Partials/Icons/Loading3Dot.tsx";
import { useDispatch } from "react-redux";

interface playlistType {
  thumbnailM: string
  title: string
  artists: []
  description: string
  like: number
  contentLastUpdate: number
  song: {
    total: string
    items: []
  }
}

const DetailPlaylist: React.FC = () => {

  const [dataDetailPlaylist, setDataDetailPlaylist] = useState<playlistType>()

  const params = useParams<{playlistId: string}>()

  const dispatch = useDispatch()

  useEffect(() => {
    (
      async () => {
        if(params.playlistId) {
          const detailPlaylist:playlistType = await api.getDetailPlaylist(params.playlistId)
          setDataDetailPlaylist(detailPlaylist)
          dispatch(setPlaylistSong(detailPlaylist.song.items))
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
              thumbnailM={dataDetailPlaylist.thumbnailM}
              title={dataDetailPlaylist.title}
              artists={dataDetailPlaylist.artists}
              total={dataDetailPlaylist.song.total}
              description={dataDetailPlaylist.description}
              like={dataDetailPlaylist.like}
              contentLastUpdate={dataDetailPlaylist.contentLastUpdate}
            />
            <TrackListDetailPlaylist items={dataDetailPlaylist.song.items}/>
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

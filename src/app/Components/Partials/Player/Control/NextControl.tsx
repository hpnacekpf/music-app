import React from "react"
import IconNext from "../../Icons/Next"
import { setSongId, setCurrnetIndexPlaylist, changeIconPlay } from "../../../../Store/Audio/audioSlice.ts"
import { useDispatch, useSelector } from "react-redux";

const NextControl: React.FC = () => {

  const currnetIndexPlaylist = useSelector((state: any) => state.audio.currnetIndexPlaylist)
  const playlistSong:any = useSelector((state: any) => state.audio.playlistSong)

  const dispatch = useDispatch()

  const handleNextSong = () => {
    if(playlistSong !== undefined && playlistSong.length > 0) {

      let currentIndex

      if(currnetIndexPlaylist === playlistSong.length - 1) {
        currentIndex = 0
      } else {
        currentIndex = currnetIndexPlaylist + 1
      }

      dispatch(setCurrnetIndexPlaylist(
        currentIndex
      ))

      dispatch(setSongId(
        playlistSong[currentIndex].encodeId
      ))

      dispatch(changeIconPlay(true))
    }
  }

  return (
    <button
      onClick={handleNextSong}
      className="mx-2 my-0 style__buttons"
      title="Next Song"
    >
      <IconNext setColor="white" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default NextControl

import React, { useEffect, useRef } from "react"
import Controls from "./Control"
import { api } from "../../../Services/api.ts"
import {
  changeIconPlay,
  setCurrentTime,
  setCurrnetIndexPlaylist,
  setDuration,
  setInfoSongPlayer,
  setSongId,
  setSrcAudio,
} from "../../../Store/Audio/audioSlice.ts"
import Lyric from "./Lyric"
import { useDispatch, useSelector } from "react-redux";

interface songType {
  title: string
  infoSong: string
  thumbnail: string
  artistsNames: string
  artists: []

  [key: number]: string
}

const Player: React.FC = () => {

  const songId = useSelector((state: any) => state.audio.songId)
  const srcAudio = useSelector((state: any) => state.audio.srcAudio)
  const isLoop = useSelector((state: any) => state.audio.isLoop)
  const dispath = useDispatch()

  const currnetIndexPlaylist = useSelector((state: any) => state.audio.currnetIndexPlaylist)
  const playlistSong: any = useSelector((state: any) => state.audio.playlistSong)

  const dispatch = useDispatch()

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    (
      async () => {
        try {
          if (songId === "") {
            console.log("song id not found")
          } else {
            const song: songType = await api.getSong(songId)
            song[128] ? dispath(setSrcAudio(song[128])) : dispath(setSrcAudio(""))

            dispath(setInfoSongPlayer(
              {
                title: song.title,
                thumbnail: song.thumbnail,
                artistsNames: song.artistsNames,
                artists: song.artists,
              }
            ))
          }
        } catch (err) {
          console.log(err)
        }
      }
    )()
  }, [songId, dispath])

  return (
    <>
      {
        songId
          ?
          <div
            className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
            <Controls auRef={audioRef.current}/>
          </div>
          :
          ""
      }

      <audio
        ref={audioRef}
        src={srcAudio}
        className="hidden"
        loop={isLoop}
        autoPlay={true}
        hidden
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispath(setCurrentTime(
              (audioRef.current.currentTime)
            ))
          }
        }
        }
        onLoadedData={() => {
          if (audioRef.current) {
            dispath(setDuration(
              (audioRef.current.duration)
            ))
          }
        }}
        onEnded={() => {
          if (!isLoop) {
            dispath(setCurrentTime(0))
            dispath(changeIconPlay(false))

            if (playlistSong !== undefined && playlistSong.length > 0) {

              let currentIndex

              if (currnetIndexPlaylist === playlistSong.length - 1) {
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
        }}
      />

      <Lyric auRef={audioRef.current}/>

    </>
  )
}

export default Player

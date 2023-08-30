import NhacCuaTui from "nhaccuatui-api-full";

const getDataMusics = async () => {
  const data = await NhacCuaTui.getHome();
  console.log(data);
  return data
}

const getSong = async (id: string) => {
  const data = await NhacCuaTui.getSong(id);
  return data
}

const getLyric = async (id: string) => {
  const data = await NhacCuaTui.getLyric(id);
  return data
}

export const api = {
  getDataMusics,
  getSong,
  getLyric
}

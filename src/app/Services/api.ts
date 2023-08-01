import NhacCuaTui from "nhaccuatui-api-full";

const getDataMusics = async () => {
  const data = await NhacCuaTui.getHome();
  return data
}

export const api = {
  getDataMusics
}

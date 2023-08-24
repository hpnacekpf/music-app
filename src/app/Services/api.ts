import NhacCuaTui from "nhaccuatui-api-full";

const getDataMusics = async () => {
  const data = await NhacCuaTui.getHome();
  console.log(data);
  return data
}

export const api = {
  getDataMusics
}

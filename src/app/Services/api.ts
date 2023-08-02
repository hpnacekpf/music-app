import NhacCuaTui from "nhaccuatui-api-full";

// const getDataMusics = async () => {
//   const data = await NhacCuaTui.getHome();
//   console.log(data);
//   return data
// }

function getDataMusics() {
  return fetch('https://6295d58475c34f1f3b225143.mockapi.io/api/v1/service').then((response) => {
    console.log(response);
    response.json()
  });
}

export const api = {
  getDataMusics
}

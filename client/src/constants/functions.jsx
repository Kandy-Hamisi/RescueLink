export const sleep = async (milliseconds) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};

export const getVideoId = (url) => {
  //function for getting the id only from the youtube link
  const params = url.split("?")[1].split("&");
  console.log(params[0].split("=")[1]);
};

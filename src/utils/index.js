import axios from "axios";
export const imageUpload = async (imageData) => {
  const fomrData = new FormData();
  fomrData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    fomrData
  );
  // console.log(data.data.display_url);
  return data?.data?.display_url;
};

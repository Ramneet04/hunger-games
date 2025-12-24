// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NutriPatrol } from "@openfoodfacts/openfoodfacts-nodejs";

const nutripatrol = new NutriPatrol(fetch);

export const addImageFlag = async (opts: {
  barcode: string | undefined;
  imgid: string;
  url: string;
}) => {
  // TODO: Replace this with NutriPatrol
  // const {barcode, imgid} = opts;
  // const NutriPatrolURL = 'https://nutripatrol.openfoodfacts.org/flag/image/?'+
  // new URLSearchParams({
  //   barcode: barcode || '',
  //   image_id: imgid || '',
  //   source: "web", flavor: "off",
  // }).toString();
  // try {
  //   window.open(NutriPatrolURL, '_blank', 'noopener,noreferrer');
  // } catch (error) {
  //   throw new Error("Could not open NutriPatrol");
  // }
  const { barcode, imgid, url } = opts;
  try {
  const response = await nutripatrol.createFlag({
    type: "image",
    flavor: "off",
    source: "web",
    barcode: barcode,
    image_id: imgid,
    url: url,
    user_id: "ramneet04",
    reason: "inappropriate_image",
    comment: "Testing image flagging via API, please ignore",
  });

  console.log("Flag created:", response);
} catch (err) {
  console.error("Failed to create flag:", err);
}

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeImageFlag = (opts: { barcode: string; imgid: string }) => {
  // TODO: Replace this with NutriPatrol
  throw new Error("This function is not implemented yet");
};

const externalApi = {
  addImageFlag,
  removeImageFlag,
};

export default externalApi;

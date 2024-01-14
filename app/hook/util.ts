import { ArtistType } from "@/app/components/atom/Images/Artist";

const getFetch = async <T>(endPoint: string, obj: Record<string, string>) => {
  const queryString = new URLSearchParams(obj).toString();
  const url = `${endPoint}?${queryString}`;

  try {
    const response = await fetch(process.env.baseURL + url);
    if (!response.ok) {
      throw new Error("Backend Response Error");
    }
    return (await response.json()) as T;
  } catch (e) {
    throw e;
  }
};

const customFetch = async <T>(method: string, url: string, obj: T) => {
  try {
    const response = await fetch(process.env.baseURL + url, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (e) {
    throw e;
  }
};

export const searchArtist = async (query: string) => {
  const params = {
    name: query,
  };

  const response = (await getFetch("/artists", params)) as ArtistType[];
  return response;
};

export const postArtist = async <T>(params: T) => {
  const response = await customFetch("POST", "/artists", params);
  console.log("DD Console Check > ", response);
  return response;
};

export const putArtist = async <T>(params: T) => {
  return await customFetch("PUT", "/artists", params);
};

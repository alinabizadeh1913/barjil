import axios from 'axios';

export const getBanners = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/settings/banners/`;
    const getData = await axios.get(baseUrl);
    const data = await getData.data;

    return data;
}
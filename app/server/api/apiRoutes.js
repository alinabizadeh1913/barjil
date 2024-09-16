import axios from 'axios';

export const getBanners = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/settings/banners/`;
    const getData = await axios.get(baseUrl);
    const data = await getData.data;

    return data;
}

export const getArticles = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/articles/`;
    const getData = await axios.get(baseUrl);
    const data = await getData.data;

    return data;
}

export const getArticlesCategory = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/categories/`
    const getData = await axios.get(baseUrl);
    const data = await getData.data;

    return data;
}
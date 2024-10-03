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

export const getProducts = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/products/products/`
    const fetchData = await axios.get(baseUrl);
    const data = await fetchData.data;

    return data;
}

export const getFaq = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/settings/faqs/`;
    const fetchData = await axios.get(baseUrl);
    const data = await fetchData.data;

    return data;
}

export const getAbout = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/settings/aboutus/`;
    const fetchData = await axios.get(baseUrl);
    const data = await fetchData.data;

    return data;
}
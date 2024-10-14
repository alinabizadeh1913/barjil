const revalidate = 60;

export const apiGet = async (url) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

    const response = await fetch(apiUrl, {
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getBanners = async () => {
    return apiGet('settings/banners/')
}

export const getArticles = async () => {
    return apiGet('blog/articles/')
}

export const getArticlesCategory = async () => {
    return apiGet('blog/categories/')
}

export const getProducts = async () => {
    return apiGet('products/products/')
}

export const getFaq = async () => {
    return apiGet('settings/faqs/')
}

export const getAbout = async () => {
    return apiGet('settings/about/')
}

export const getSettings = async () => {
    return apiGet('settings/settings/')
}
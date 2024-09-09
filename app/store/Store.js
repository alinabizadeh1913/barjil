import create from 'zustand';

const useStore = create(set => ({
    imgSrc : '/img/01.png',
    language : 'en',
    setLanguage : (newLang) => set(state => ({ language : newLang })),
    setImgSrc : (newImg) => set(state => ({ imgSrc : newImg }))
}))

export default useStore;
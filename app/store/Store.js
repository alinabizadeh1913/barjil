import create from 'zustand';

const useStore = create(set => ({
    imgSrc : '',
    language : 'en',
    setLanguage : (newLang) => set(state => ({ language : newLang })),
    setImgSrc : (newImg) => set(state => ({ imgSrc : newImg }))
}))

export default useStore;
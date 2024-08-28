import create from 'zustand';

const useStore = create(set => ({
    imgSrc : '/img/01.png',
    setImgSrc : (newImg) => set(state => ({ imgSrc : newImg }))
}))

export default useStore;
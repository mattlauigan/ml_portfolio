import { create} from 'zustand'

type ScrollType = {
  scrollTop : number 

  setScrollTop: (position: number ) => void
}

const useScroll = create<ScrollType>((set ) => ({
  scrollTop : 0,


  setScrollTop: (position) => set({ scrollTop: position }),
}))

export default useScroll
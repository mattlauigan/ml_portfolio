import { create} from 'zustand'

type ScrollType = {
  scrollTop : number 
  currentSection : string

  setCurrentSection : (section: string) => void
  setScrollTop: (position: number ) => void
}

const useScroll = create<ScrollType>((set ) => ({
  scrollTop : 0,
  currentSection : 'top-div',


  setScrollTop: (position) => set({ scrollTop: position }),
  setCurrentSection : (section) => set({currentSection : section})
}))

export default useScroll
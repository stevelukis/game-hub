import { create } from "zustand";

interface GameQuery {
  page_size: number;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

export interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { page_size: 15 },
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { page_size: store.gameQuery.page_size, searchText },
    })),
}));

export default useGameQueryStore;

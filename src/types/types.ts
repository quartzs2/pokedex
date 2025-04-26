export interface PokeData {
  description: string;
  front: string;
  name: string;
  back: string;
  id: number;
}

export interface PokeState {
  loading: boolean;
  data: PokeData[];
}

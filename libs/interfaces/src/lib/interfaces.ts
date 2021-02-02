export interface Vaki {
  id?: string;
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  //country: Country['isoCode'];
}

export interface VakiReward {
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: string;
  delivery_date: number;
  claimed: number;
  quantityAvailable: number;
}

export interface Recompensas {
  id?: string;
  titulo: string;
  descripcion: string;
  existencias: number;
  precio: string;
  qty?: number;
}

export interface currencies {
  value: string;
  label: string;
}

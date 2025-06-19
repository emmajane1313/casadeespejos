export interface Reflection {
  image: string;
  title: string;
  caption: string;
  pinterest?: string;
  tumblr?: string;
  flickr?: string;
  alt: string;
  width: number;
  height: number;
  contenido?: boolean;
}

export interface Article {
  contenido: string;
  titulo: string;
  image: string;
}

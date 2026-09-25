export type Theme = 'light' | 'dark';
export type Variant = 'vd' | 'vm';

/** The reference renders four complete layouts; data is keyed the same way. */
export type Key4 = 'vdl' | 'vdd' | 'vml' | 'vmd';

export function variantKey(variant: Variant, theme: Theme): Key4 {
  return (variant + (theme === 'dark' ? 'd' : 'l')) as Key4;
}

/** A run of tweet text; `link` marks the blue @handle / $ticker spans. */
export interface Segment {
  t: string;
  link?: boolean;
}

export interface CreatorAvatar {
  kind: 'image' | 'gradient';
  src?: string | null;
  style?: string;
  gradient?: string;
  img?: string | null;
  imgStyle?: string | null;
}

export interface Badge {
  kind: 'live' | 'graduated' | 'house' | 'pair';
  label: string;
  style: string;
}

/** The three "pay with" marks the reference uses for a coin's quote asset. */
export type PayIcon =
  | { kind: 'img'; src: string; alt: string | null }
  | { kind: 'eth'; wrapStyle: string }
  | { kind: 'chip'; text: string; style: string };

/** One themed rendering of a coin card. */
export interface CoinFields {
  href: string;
  address: string;
  ticker: string;
  name: string;
  nameTicker: string;
  buyLabel: string;
  coverImage: string;
  coverLabel: string;
  coverFontSize: string;
  coverGradient: string;
  badges: Badge[];
  mcap: string;
  mcapStyle: string;
  replies: string;
  creatorName: string;
  creatorRole: string;
  creatorAvatar: CreatorAvatar;
  tweetText: Segment[];
  progress: { label: string; range: string; width: string; gradient: string };
  price: { head: string; sub: string; tail: string; unit: string };
  payWith: { icon: PayIcon };
  cardBackground: string;
  cardShadow: string;
}

export interface Coin extends CoinFields {
  dark: CoinFields;
  coverHeight: { vd: string; vm: string };
}

/** The attached "launched" card; every geometry string differs per layout. */
export interface PorchMedia {
  wrapperStyle: string;
  frameStyle: string;
  centerStyle: string;
  houseStyle: string;
  house: string;
  windowStyle: string;
  windowGradient: string;
  glossStyle: string;
  cover: string | null;
  coverStyle: string | null;
  label: string;
  labelFontSize: string | null;
  captionStyle: string;
  caption: string;
  footerStyle: string;
  footer: string;
}

export interface PorchPostFields {
  author: string;
  handle: string;
  time: string;
  avatar: CreatorAvatar;
  url: string;
  automated: boolean;
  text: Segment[];
}

export interface PorchPostData extends PorchPostFields {
  dark: PorchPostFields;
  media: Record<Key4, PorchMedia | null>;
}

export interface PorchThread {
  glow: boolean;
  cardStyle: Record<Key4, string>;
  connector: Record<Key4, string>;
  badge: { label: string; style: Record<Key4, string>; wrapStyle: Record<Key4, string> } | null;
  posts: PorchPostData[];
}

export interface HeroChip {
  href: string;
  label: string;
  percent: string;
  style: string;
}

export interface HeroStrip {
  chips: HeroChip[];
  coverWrapStyle: string;
  percentStyle: string;
}

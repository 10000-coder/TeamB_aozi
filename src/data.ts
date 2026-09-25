import coinsJson from './data/coins.json';
import feedJson from './data/feed.json';
import heroJson from './data/hero.json';
import templatesJson from './data/templates.json';
import type { Coin, HeroStrip, Key4, PorchThread, Theme, Variant } from './types';

/**
 * src/data/*.json is generated from the reference site's hydrated DOM by
 * tools/extract_all.py + tools/extract_templates.py in the reference package:
 * real content and real inline styles, keyed by layout variant, not sample data.
 */
export const coins = coinsJson as unknown as Coin[];
export const threads = feedJson as unknown as PorchThread[];
export const heroStrip = heroJson as unknown as Record<Key4, HeroStrip>;

export interface CardTemplate {
  rootPrefix: string;
  imgWrap: string;
  badgesRow: string;
  mcapWrap: string;
  mcapLabel: string;
  buyBtn: string;
  bodyRow: string;
  titleRow: string;
  titleBlock: string;
  name: string;
  nameTicker: string;
  repliesWrap: string;
  quoteRow: string;
  quoteBody: string;
  creatorHeadRow: string;
  creatorName: string;
  creatorRole: string;
  xWrap: string;
  tweetText: string;
  progWrap: string;
  progHead: string;
  progLabel: string;
  progRange: string;
  barTrack: string;
  barFillTail: string;
  footRow: string;
  priceWrap: string;
  priceUnit: string;
  payWrap: string;
  payIconWrap: string | null;
}

export interface PostTemplate {
  wrapper: string;
  row: string;
  avatarImg: string | null;
  avatarWrap: string | null;
  body: string;
  headRow: string;
  author: string;
  handle: string;
  dotsWrap: string | null;
  text: string;
  automatedRow: string | null;
}

export interface BoardTemplate {
  container: string;
  head: string;
  h2: string;
  titleP: string;
  sortGroup: string;
  grid: string;
  spacer: string;
  gap: string;
}

export const cardTemplates = (templatesJson as unknown as { card: Record<Theme, CardTemplate> }).card;
export const postTemplates = (templatesJson as unknown as { post: Record<Key4, PostTemplate> }).post;
export const boardTemplates = (templatesJson as unknown as { board: Record<Key4, BoardTemplate> }).board;

export type { Variant };

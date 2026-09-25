import { sx } from '../lib/sx';
import type { PayIcon as PayIconData } from '../types';
import { Eth } from './Icons';

/** Quote-asset mark: a coin logo, the ETH glyph, or an initial chip. */
export function PayIcon({ icon }: { icon: PayIconData }) {
  if (icon.kind === 'img') {
    return <img alt={icon.alt ?? ''} src={icon.src} style={sx(IMG)} />;
  }
  if (icon.kind === 'eth') {
    return (
      <span style={sx(icon.wrapStyle)}>
        <Eth width={14} height={14} style={{ display: 'block', flex: 'none' }} />
      </span>
    );
  }
  return <span style={sx(icon.style)}>{icon.text}</span>;
}

const IMG =
  'width:20px;height:20px;border-radius:50%;display:block;flex:none;background:#fff;padding:3px;' +
  'object-fit:contain;box-shadow:0 1px 2px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.05)';

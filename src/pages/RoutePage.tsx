import type { ComponentType } from 'react';
import {
  DocsVdD, DocsVdL, DocsVmD, DocsVmL,
  FlywheelVdD, FlywheelVdL, FlywheelVmD, FlywheelVmL,
  LaunchVdD, LaunchVdL, LaunchVmD, LaunchVmL,
  ProfileVdD, ProfileVdL, ProfileVmD, ProfileVmL,
} from '../sections/routes';
import { variantKey, type Theme, type Variant } from '../types';

type Family = Record<Variant, { l: ComponentType; d: ComponentType }>;

/** The pages the reference links to from its top bar. */
const PAGES: Record<string, Family> = {
  '/docs': { vd: { l: DocsVdL, d: DocsVdD }, vm: { l: DocsVmL, d: DocsVmD } },
  '/flywheel': { vd: { l: FlywheelVdL, d: FlywheelVdD }, vm: { l: FlywheelVmL, d: FlywheelVmD } },
  '/profile': { vd: { l: ProfileVdL, d: ProfileVdD }, vm: { l: ProfileVmL, d: ProfileVmD } },
  '/launch': { vd: { l: LaunchVdL, d: LaunchVdD }, vm: { l: LaunchVmL, d: LaunchVmD } },
};

/** Trailing slashes reach us from static hosts and Vercel redirects alike. */
export function normalisePath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

export function hasRoute(path: string) {
  return Object.prototype.hasOwnProperty.call(PAGES, normalisePath(path));
}

export function RoutePage({ path, variant, theme }: { path: string; variant: Variant; theme: Theme }) {
  const family = PAGES[normalisePath(path)];
  if (!family) return null;
  const Comp = family[variant][theme === 'dark' ? 'd' : 'l'];
  return (
    <div className={'v ' + variantKey(variant, theme)}>
      <Comp />
    </div>
  );
}

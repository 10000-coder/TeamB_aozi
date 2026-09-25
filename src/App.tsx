import { JustBuilt } from './components/JustBuilt';
import { coins, heroStrip, threads } from './data';
import { hasRoute, RoutePage } from './pages/RoutePage';
import { useAnchors } from './useAnchors';
import { useLocation } from './useLocation';
import { useSiteChrome } from './useSiteChrome';
import { CoinBoard } from './sections/CoinBoard';
import { Porch } from './sections/Porch';
import { FooterVdD, FooterVdL, FooterVmD, FooterVmL } from './sections/static/Footer';
import { HeroVdD, HeroVdL, HeroVmD, HeroVmL } from './sections/static/Hero';
import { HowItWorksVdD, HowItWorksVdL, HowItWorksVmD, HowItWorksVmL } from './sections/static/HowItWorks';
import { NavVdD, NavVdL, NavVmD, NavVmL } from './sections/static/Nav';
import { ShowcaseVdD, ShowcaseVdL, ShowcaseVmD, ShowcaseVmL } from './sections/static/Showcase';
import {
  FloatiesVdD,
  FloatiesVdL,
  FloatiesVmD,
  FloatiesVmL,
  ShellBackdropVdD,
  ShellBackdropVdL,
  ShellBackdropVmD,
  ShellBackdropVmL,
} from './sections/static/Shell';
import { TickbarVdD, TickbarVdL, TickbarVmD, TickbarVmL } from './sections/static/Tickbar';
import { sx } from './lib/sx';
import { variantKey, type Theme, type Variant } from './types';
import { useTheme } from './useTheme';
import { useViewport } from './useViewport';

function pick<T>(theme: Theme, light: T, dark: T) {
  return theme === 'dark' ? dark : light;
}

/** The static chrome, resolved once per layout + theme. */
function chrome(variant: Variant, theme: Theme) {
  const d = variant === 'vd';
  return {
    Backdrop: pick(theme, d ? ShellBackdropVdL : ShellBackdropVmL, d ? ShellBackdropVdD : ShellBackdropVmD),
    Floaties: pick(theme, d ? FloatiesVdL : FloatiesVmL, d ? FloatiesVdD : FloatiesVmD),
    Nav: pick(theme, d ? NavVdL : NavVmL, d ? NavVdD : NavVmD),
    Tickbar: pick(theme, d ? TickbarVdL : TickbarVmL, d ? TickbarVdD : TickbarVmD),
    Hero: pick(theme, d ? HeroVdL : HeroVmL, d ? HeroVdD : HeroVmD),
    Showcase: pick(theme, d ? ShowcaseVdL : ShowcaseVmL, d ? ShowcaseVdD : ShowcaseVmD),
    HowItWorks: pick(theme, d ? HowItWorksVdL : HowItWorksVmL, d ? HowItWorksVdD : HowItWorksVmD),
    Footer: pick(theme, d ? FooterVdL : FooterVmL, d ? FooterVdD : FooterVmD),
  };
}

/** The landing page, assembled from the generated static sections. */
function Home({ variant, theme }: { variant: Variant; theme: Theme }) {
  const k = variantKey(variant, theme);
  const { Backdrop, Floaties, Nav, Tickbar, Hero, Showcase, HowItWorks, Footer } = chrome(variant, theme);
  const spacer = variant === 'vd' ? 110 : 64;
  const gap = variant === 'vd' ? 136 : 76;

  // The reference keys its stylesheet off `html[data-theme]` plus one of the
  // four variant classes (vdl / vdd / vml / vmd). We keep that exact contract
  // and render only the variant the breakpoint selects.
  return (
    <div className={`v ${k}`}>
      <div style={{ background: 'transparent' }}>
        <div className="sk" style={sx('position:relative;isolation:isolate;')}>
          <Backdrop />
          <div style={sx('position:relative;z-index:2')}>
            <Floaties />
            <Nav />
            <Tickbar />
            <Hero justBuilt={<JustBuilt strip={heroStrip[k]} theme={theme} />} />
            <Showcase />
          </div>
        </div>
        <div style={sx(`height:${spacer}px`)} />
        <CoinBoard coins={coins} variant={variant} theme={theme} />
        <div style={sx(`height:${gap}px`)} />
        <Porch threads={threads} variant={variant} theme={theme} />
        <div style={sx(`height:${gap}px`)} />
        <HowItWorks />
        <div style={sx(`height:${gap}px`)} />
        <Footer />
      </div>
    </div>
  );
}

export function App() {
  const { theme, toggle } = useTheme();
  const variant = useViewport();
  const loc = useLocation();
  const toasts = useSiteChrome(toggle);
  useAnchors(loc);

  // The four top-bar pages are ported React. The 47 /t/<address> pages are real
  // prerendered files, so they never reach the router. Anything else falls back
  // to the landing page instead of rendering nothing.
  const body = hasRoute(loc.path)
    ? <RoutePage path={loc.path} variant={variant} theme={theme} />
    : <Home variant={variant} theme={theme} />;

  return (
    <>
      {body}
      {toasts}
    </>
  );
}

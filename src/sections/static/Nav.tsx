import { sx } from '../../lib/sx';

export function NavVdL() {
  return (
    <>
  <div style={sx("position:relative;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:22px 56px;max-width:1440px;margin:0 auto")}>
    <a aria-label="aozi home" href="/" style={sx("display:flex")}>
      <div style={sx("display:flex;align-items:center;gap:8px")}>
        <img alt="" src="/img/m-full.webp" style={sx("width:37px;height:37px;display:block;filter:drop-shadow(0 3px 5px rgba(16,40,28,.25))")} />
        <span style={sx("font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-weight:700;font-size:22px;letter-spacing:-0.045em")}>
          {"aozi"}
          <span style={sx("color:#68716c;font-weight:500")}>
            {".family"}
          </span>
        </span>
      </div>
    </a>
    <div style={sx("display:flex;gap:34px")}>
      <a href="/#coins" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"Coins"}
      </a>
      <a href="/#porch" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"Porch talk"}
      </a>
      <a href="/launch" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"How to launch"}
      </a>
      <a href="/docs" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"Docs"}
      </a>
      <a href="/flywheel" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"Flywheel"}
      </a>
      <a href="/profile" style={sx("font-size:15px;font-weight:500;color:#68716c")}>
        {"Profile"}
      </a>
    </div>
    <div style={sx("display:flex;gap:10px;align-items:center")}>
      <button aria-label="Switch theme" className="b b0" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:44px;padding:0 18px;font-size:15px;")} target="_blank">
        <svg height="13" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="13">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot"}
      </a>
      <a aria-label="Your profile and aozi wallet" className="b b2" href="/profile" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} title="Profile">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </a>
    </div>
</div>
    </>
  );
}

NavVdL
export function NavVdD() {
  return (
    <>
  <div style={sx("position:relative;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:22px 56px;max-width:1440px;margin:0 auto")}>
    <a aria-label="aozi home" href="/" style={sx("display:flex")}>
      <div style={sx("display:flex;align-items:center;gap:8px")}>
        <img alt="" src="/img/m-full.webp" style={sx("width:37px;height:37px;display:block;filter:drop-shadow(0 3px 5px rgba(16,40,28,.25))")} />
        <span style={sx("font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-weight:700;font-size:22px;letter-spacing:-0.045em")}>
          {"aozi"}
          <span style={sx("color:#8a908c;font-weight:500")}>
            {".family"}
          </span>
        </span>
      </div>
    </a>
    <div style={sx("display:flex;gap:34px")}>
      <a href="/#coins" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"Coins"}
      </a>
      <a href="/#porch" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"Porch talk"}
      </a>
      <a href="/launch" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"How to launch"}
      </a>
      <a href="/docs" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"Docs"}
      </a>
      <a href="/flywheel" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"Flywheel"}
      </a>
      <a href="/profile" style={sx("font-size:15px;font-weight:500;color:#8a908c")}>
        {"Profile"}
      </a>
    </div>
    <div style={sx("display:flex;gap:10px;align-items:center")}>
      <button aria-label="Switch theme" className="b b0" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:44px;padding:0 18px;font-size:15px;")} target="_blank">
        <svg height="13" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="13">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot"}
      </a>
      <a aria-label="Your profile and aozi wallet" className="b b2" href="/profile" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} title="Profile">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </a>
    </div>
</div>
    </>
  );
}

NavVdD
export function NavVmL() {
  return (
    <>
  <div style={sx("position:relative;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:14px 16px")}>
    <a aria-label="aozi home" href="/" style={sx("display:flex")}>
      <div style={sx("display:flex;align-items:center;gap:8px")}>
        <img alt="" src="/img/m-full.webp" style={sx("width:32px;height:32px;display:block;filter:drop-shadow(0 3px 5px rgba(16,40,28,.25))")} />
        <span style={sx("font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-weight:700;font-size:19px;letter-spacing:-0.045em")}>
          {"aozi"}
          <span style={sx("color:#68716c;font-weight:500")}>
            {".family"}
          </span>
        </span>
      </div>
    </a>
    <div style={sx("display:flex;gap:8px")}>
      <button aria-label="Switch theme" className="b b0" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <a aria-label="Your profile and aozi wallet" className="b b2" href="/profile" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} title="Profile">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </a>
      <button aria-label="Menu" className="b b2" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </div>
</div>
    </>
  );
}

NavVmL
export function NavVmD() {
  return (
    <>
  <div style={sx("position:relative;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:14px 16px")}>
    <a aria-label="aozi home" href="/" style={sx("display:flex")}>
      <div style={sx("display:flex;align-items:center;gap:8px")}>
        <img alt="" src="/img/m-full.webp" style={sx("width:32px;height:32px;display:block;filter:drop-shadow(0 3px 5px rgba(16,40,28,.25))")} />
        <span style={sx("font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-weight:700;font-size:19px;letter-spacing:-0.045em")}>
          {"aozi"}
          <span style={sx("color:#8a908c;font-weight:500")}>
            {".family"}
          </span>
        </span>
      </div>
    </a>
    <div style={sx("display:flex;gap:8px")}>
      <button aria-label="Switch theme" className="b b0" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>
      <a aria-label="Your profile and aozi wallet" className="b b2" href="/profile" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} title="Profile">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </a>
      <button aria-label="Menu" className="b b2" style={sx("width:44px;height:44px;border-radius:50%;padding:0")} type="button">
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="18">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </div>
</div>
    </>
  );
}

NavVmD
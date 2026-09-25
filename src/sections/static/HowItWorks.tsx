import { sx } from '../../lib/sx';

export function HowItWorksVdL() {
  return (
    <>
  <div style={sx("max-width:1440px;margin:0 auto;padding:0 56px;")}>
    <div style={sx("margin-bottom:30px")}>
      <h2 className="disp" style={sx("margin:0;font-size:76px;line-height:.95")}>
        {"How it "}
        <em>
          {"works"}
        </em>
      </h2>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(0, 1.45fr) minmax(0, 1fr);gap:20px")}>
      <div style={sx("background:#ffffff;border-radius:28px;padding:30px;box-shadow:0 1px 1px rgba(16,40,28,.04), 0 12px 32px -12px rgba(16,40,28,.16), inset 0 1px 0 rgba(255,255,255,.9);")}>
        <div className="disp" style={sx("font-size:38px")}>
          {"Two ways to "}
          <em>
            {"launch"}
          </em>
        </div>
        <div style={sx("display:flex;flex-direction:column;margin-top:14px")}>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(17,23,19,.08)")}>
            <div style={sx("font-size:13px;color:#68716c")}>
              {"On your own tweet, with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:22px;margin-top:6px;color:#111713")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch "}
              <span style={sx("color:#1d9bf0")}>
                {"$TICKER"}
              </span>
              {" Name "}
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:inline-block;vertical-align:-3px;opacity:.6;flex:none")} viewBox="0 0 24 24" width="20">
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(17,23,19,.08)")}>
            <div style={sx("font-size:13px;color:#68716c")}>
              {"Deep in a thread, under a tweet with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:22px;margin-top:6px;color:#111713")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch this"}
            </div>
          </div>
        </div>
        <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px;flex-wrap:wrap")}>
          <span style={sx("font-size:15px;color:#68716c")}>
            {"You pay the 0.0005 ETH Pons fee from your aozi wallet."}
          </span>
          <a href="/launch" style={sx("display:inline-flex;align-items:center;gap:6px;font-weight:600")}>
            {"The rules "}
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="16">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div style={sx("background:#ffffff;border-radius:28px;padding:30px;box-shadow:0 1px 1px rgba(16,40,28,.04), 0 12px 32px -12px rgba(16,40,28,.16), inset 0 1px 0 rgba(255,255,255,.9);")}>
        <div className="disp" style={sx("font-size:38px")}>
          {"Then anyone "}
          <em>
            {"buys"}
          </em>
        </div>
        <p style={sx("margin:10px 0 0;color:#68716c;font-size:16px;line-height:1.5")}>
          {"Any coin on Pons, with ETH from your own aozi wallet. Ask on X: "}
          <span style={sx("color:#111713")}>
            {"@aozibot buy $TICKER 0.01"}
          </span>
          {", or tap Buy on any coin here and post it."}
        </p>
        <div style={sx("display:flex;align-items:center;gap:10px;margin-top:22px")}>
          <span style={sx("width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.05)")}>
            <svg fill="none" height="24" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="24">
              <path d="M12 3v6.65l5.625 2.516z" fill="#8FFCF3" />
              <path d="m12 3-5.625 9.166L12 9.651z" fill="#CABCF8" />
              <path d="M12 16.477v4.522l5.625-7.784z" fill="#CBA7F5" />
              <path d="M12 21v-4.523l-5.625-3.262z" fill="#74A0F3" />
              <path d="m12 15.43 5.625-3.263L12 9.65z" fill="#CBA7F5" />
              <path d="M6.375 12.167 12 15.429V9.651z" fill="#74A0F3" />
              <path clipRule="evenodd" d="m12 15.429-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23 5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198 5.16 2.295-5.16-8.41z" fill="#202699" fillRule="evenodd" />
              <path clipRule="evenodd" d="M12 16.406 6.375 13.21 12 21l5.625-7.79zm-4.995-2.633 4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" fill="#202699" fillRule="evenodd" />
            </svg>
          </span>
          <span style={sx("font-size:14px;color:#68716c")}>
            {"ETH on Robinhood Chain"}
          </span>
        </div>
        <div style={sx("margin-top:24px")}>
          <a className="b b2" href="/#coins" style={sx("height:48px;padding:0 20px;font-size:15px;")}>
            {"See the coins"}
            <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

HowItWorksVdL
export function HowItWorksVdD() {
  return (
    <>
  <div style={sx("max-width:1440px;margin:0 auto;padding:0 56px;")}>
    <div style={sx("margin-bottom:30px")}>
      <h2 className="disp" style={sx("margin:0;font-size:76px;line-height:.95")}>
        {"How it "}
        <em>
          {"works"}
        </em>
      </h2>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(0, 1.45fr) minmax(0, 1fr);gap:20px")}>
      <div style={sx("background:#101212;border-radius:28px;padding:30px;box-shadow:0 1px 0 rgba(0,0,0,.4), 0 18px 44px -18px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.06), inset 0 0 0 1px rgba(255,255,255,.07);")}>
        <div className="disp" style={sx("font-size:38px")}>
          {"Two ways to "}
          <em>
            {"launch"}
          </em>
        </div>
        <div style={sx("display:flex;flex-direction:column;margin-top:14px")}>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(255,255,255,.07)")}>
            <div style={sx("font-size:13px;color:#8a908c")}>
              {"On your own tweet, with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:22px;margin-top:6px;color:#f2f3f1")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch "}
              <span style={sx("color:#1d9bf0")}>
                {"$TICKER"}
              </span>
              {" Name "}
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:inline-block;vertical-align:-3px;opacity:.6;flex:none")} viewBox="0 0 24 24" width="20">
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(255,255,255,.07)")}>
            <div style={sx("font-size:13px;color:#8a908c")}>
              {"Deep in a thread, under a tweet with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:22px;margin-top:6px;color:#f2f3f1")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch this"}
            </div>
          </div>
        </div>
        <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px;flex-wrap:wrap")}>
          <span style={sx("font-size:15px;color:#8a908c")}>
            {"You pay the 0.0005 ETH Pons fee from your aozi wallet."}
          </span>
          <a href="/launch" style={sx("display:inline-flex;align-items:center;gap:6px;font-weight:600")}>
            {"The rules "}
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="16">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div style={sx("background:#101212;border-radius:28px;padding:30px;box-shadow:0 1px 0 rgba(0,0,0,.4), 0 18px 44px -18px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.06), inset 0 0 0 1px rgba(255,255,255,.07);")}>
        <div className="disp" style={sx("font-size:38px")}>
          {"Then anyone "}
          <em>
            {"buys"}
          </em>
        </div>
        <p style={sx("margin:10px 0 0;color:#8a908c;font-size:16px;line-height:1.5")}>
          {"Any coin on Pons, with ETH from your own aozi wallet. Ask on X: "}
          <span style={sx("color:#f2f3f1")}>
            {"@aozibot buy $TICKER 0.01"}
          </span>
          {", or tap Buy on any coin here and post it."}
        </p>
        <div style={sx("display:flex;align-items:center;gap:10px;margin-top:22px")}>
          <span style={sx("width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.05)")}>
            <svg fill="none" height="24" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="24">
              <path d="M12 3v6.65l5.625 2.516z" fill="#8FFCF3" />
              <path d="m12 3-5.625 9.166L12 9.651z" fill="#CABCF8" />
              <path d="M12 16.477v4.522l5.625-7.784z" fill="#CBA7F5" />
              <path d="M12 21v-4.523l-5.625-3.262z" fill="#74A0F3" />
              <path d="m12 15.43 5.625-3.263L12 9.65z" fill="#CBA7F5" />
              <path d="M6.375 12.167 12 15.429V9.651z" fill="#74A0F3" />
              <path clipRule="evenodd" d="m12 15.429-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23 5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198 5.16 2.295-5.16-8.41z" fill="#202699" fillRule="evenodd" />
              <path clipRule="evenodd" d="M12 16.406 6.375 13.21 12 21l5.625-7.79zm-4.995-2.633 4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" fill="#202699" fillRule="evenodd" />
            </svg>
          </span>
          <span style={sx("font-size:14px;color:#8a908c")}>
            {"ETH on Robinhood Chain"}
          </span>
        </div>
        <div style={sx("margin-top:24px")}>
          <a className="b b2" href="/#coins" style={sx("height:48px;padding:0 20px;font-size:15px;")}>
            {"See the coins"}
            <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

HowItWorksVdD
export function HowItWorksVmL() {
  return (
    <>
  <div style={sx("max-width:1440px;margin:0 auto;padding:0 16px;")}>
    <div style={sx("margin-bottom:20px")}>
      <h2 className="disp" style={sx("margin:0;font-size:46px;line-height:.95")}>
        {"How it "}
        <em>
          {"works"}
        </em>
      </h2>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(0, 1fr);gap:14px")}>
      <div style={sx("background:#ffffff;border-radius:28px;padding:20px;box-shadow:0 1px 1px rgba(16,40,28,.04), 0 12px 32px -12px rgba(16,40,28,.16), inset 0 1px 0 rgba(255,255,255,.9);")}>
        <div className="disp" style={sx("font-size:30px")}>
          {"Two ways to "}
          <em>
            {"launch"}
          </em>
        </div>
        <div style={sx("display:flex;flex-direction:column;margin-top:14px")}>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(17,23,19,.08)")}>
            <div style={sx("font-size:13px;color:#68716c")}>
              {"On your own tweet, with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:18px;margin-top:6px;color:#111713")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch "}
              <span style={sx("color:#1d9bf0")}>
                {"$TICKER"}
              </span>
              {" Name "}
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:inline-block;vertical-align:-3px;opacity:.6;flex:none")} viewBox="0 0 24 24" width="20">
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(17,23,19,.08)")}>
            <div style={sx("font-size:13px;color:#68716c")}>
              {"Deep in a thread, under a tweet with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:18px;margin-top:6px;color:#111713")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch this"}
            </div>
          </div>
        </div>
        <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px;flex-wrap:wrap")}>
          <span style={sx("font-size:15px;color:#68716c")}>
            {"You pay the 0.0005 ETH Pons fee from your aozi wallet."}
          </span>
          <a href="/launch" style={sx("display:inline-flex;align-items:center;gap:6px;font-weight:600")}>
            {"The rules "}
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="16">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div style={sx("background:#ffffff;border-radius:28px;padding:20px;box-shadow:0 1px 1px rgba(16,40,28,.04), 0 12px 32px -12px rgba(16,40,28,.16), inset 0 1px 0 rgba(255,255,255,.9);")}>
        <div className="disp" style={sx("font-size:30px")}>
          {"Then anyone "}
          <em>
            {"buys"}
          </em>
        </div>
        <p style={sx("margin:10px 0 0;color:#68716c;font-size:16px;line-height:1.5")}>
          {"Any coin on Pons, with ETH from your own aozi wallet. Ask on X: "}
          <span style={sx("color:#111713")}>
            {"@aozibot buy $TICKER 0.01"}
          </span>
          {", or tap Buy on any coin here and post it."}
        </p>
        <div style={sx("display:flex;align-items:center;gap:10px;margin-top:22px")}>
          <span style={sx("width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.05)")}>
            <svg fill="none" height="24" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="24">
              <path d="M12 3v6.65l5.625 2.516z" fill="#8FFCF3" />
              <path d="m12 3-5.625 9.166L12 9.651z" fill="#CABCF8" />
              <path d="M12 16.477v4.522l5.625-7.784z" fill="#CBA7F5" />
              <path d="M12 21v-4.523l-5.625-3.262z" fill="#74A0F3" />
              <path d="m12 15.43 5.625-3.263L12 9.65z" fill="#CBA7F5" />
              <path d="M6.375 12.167 12 15.429V9.651z" fill="#74A0F3" />
              <path clipRule="evenodd" d="m12 15.429-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23 5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198 5.16 2.295-5.16-8.41z" fill="#202699" fillRule="evenodd" />
              <path clipRule="evenodd" d="M12 16.406 6.375 13.21 12 21l5.625-7.79zm-4.995-2.633 4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" fill="#202699" fillRule="evenodd" />
            </svg>
          </span>
          <span style={sx("font-size:14px;color:#68716c")}>
            {"ETH on Robinhood Chain"}
          </span>
        </div>
        <div style={sx("margin-top:24px")}>
          <a className="b b2" href="/#coins" style={sx("height:48px;padding:0 20px;font-size:15px;")}>
            {"See the coins"}
            <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

HowItWorksVmL
export function HowItWorksVmD() {
  return (
    <>
  <div style={sx("max-width:1440px;margin:0 auto;padding:0 16px;")}>
    <div style={sx("margin-bottom:20px")}>
      <h2 className="disp" style={sx("margin:0;font-size:46px;line-height:.95")}>
        {"How it "}
        <em>
          {"works"}
        </em>
      </h2>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(0, 1fr);gap:14px")}>
      <div style={sx("background:#101212;border-radius:28px;padding:20px;box-shadow:0 1px 0 rgba(0,0,0,.4), 0 18px 44px -18px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.06), inset 0 0 0 1px rgba(255,255,255,.07);")}>
        <div className="disp" style={sx("font-size:30px")}>
          {"Two ways to "}
          <em>
            {"launch"}
          </em>
        </div>
        <div style={sx("display:flex;flex-direction:column;margin-top:14px")}>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(255,255,255,.07)")}>
            <div style={sx("font-size:13px;color:#8a908c")}>
              {"On your own tweet, with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:18px;margin-top:6px;color:#f2f3f1")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch "}
              <span style={sx("color:#1d9bf0")}>
                {"$TICKER"}
              </span>
              {" Name "}
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:inline-block;vertical-align:-3px;opacity:.6;flex:none")} viewBox="0 0 24 24" width="20">
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
          <div style={sx("padding:16px 0;border-top:1px solid rgba(255,255,255,.07)")}>
            <div style={sx("font-size:13px;color:#8a908c")}>
              {"Deep in a thread, under a tweet with an image"}
            </div>
            <div style={sx("font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:18px;margin-top:6px;color:#f2f3f1")}>
              <span style={sx("color:#1d9bf0")}>
                {"@aozibot"}
              </span>
              {" launch this"}
            </div>
          </div>
        </div>
        <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px;flex-wrap:wrap")}>
          <span style={sx("font-size:15px;color:#8a908c")}>
            {"You pay the 0.0005 ETH Pons fee from your aozi wallet."}
          </span>
          <a href="/launch" style={sx("display:inline-flex;align-items:center;gap:6px;font-weight:600")}>
            {"The rules "}
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="16">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div style={sx("background:#101212;border-radius:28px;padding:20px;box-shadow:0 1px 0 rgba(0,0,0,.4), 0 18px 44px -18px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.06), inset 0 0 0 1px rgba(255,255,255,.07);")}>
        <div className="disp" style={sx("font-size:30px")}>
          {"Then anyone "}
          <em>
            {"buys"}
          </em>
        </div>
        <p style={sx("margin:10px 0 0;color:#8a908c;font-size:16px;line-height:1.5")}>
          {"Any coin on Pons, with ETH from your own aozi wallet. Ask on X: "}
          <span style={sx("color:#f2f3f1")}>
            {"@aozibot buy $TICKER 0.01"}
          </span>
          {", or tap Buy on any coin here and post it."}
        </p>
        <div style={sx("display:flex;align-items:center;gap:10px;margin-top:22px")}>
          <span style={sx("width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.05)")}>
            <svg fill="none" height="24" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="24">
              <path d="M12 3v6.65l5.625 2.516z" fill="#8FFCF3" />
              <path d="m12 3-5.625 9.166L12 9.651z" fill="#CABCF8" />
              <path d="M12 16.477v4.522l5.625-7.784z" fill="#CBA7F5" />
              <path d="M12 21v-4.523l-5.625-3.262z" fill="#74A0F3" />
              <path d="m12 15.43 5.625-3.263L12 9.65z" fill="#CBA7F5" />
              <path d="M6.375 12.167 12 15.429V9.651z" fill="#74A0F3" />
              <path clipRule="evenodd" d="m12 15.429-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23 5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198 5.16 2.295-5.16-8.41z" fill="#202699" fillRule="evenodd" />
              <path clipRule="evenodd" d="M12 16.406 6.375 13.21 12 21l5.625-7.79zm-4.995-2.633 4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" fill="#202699" fillRule="evenodd" />
            </svg>
          </span>
          <span style={sx("font-size:14px;color:#8a908c")}>
            {"ETH on Robinhood Chain"}
          </span>
        </div>
        <div style={sx("margin-top:24px")}>
          <a className="b b2" href="/#coins" style={sx("height:48px;padding:0 20px;font-size:15px;")}>
            {"See the coins"}
            <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

HowItWorksVmD
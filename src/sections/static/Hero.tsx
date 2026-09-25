import type { ReactNode } from 'react';
import { sx } from '../../lib/sx';

export function HeroVdL({ justBuilt }: { justBuilt: ReactNode }) {
  return (
    <>
  <div style={sx("position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:56px 48px 54px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-size:14px;font-weight:600;white-space:nowrap;background:rgba(255,255,255,.72);color:#111713;box-shadow:0 1px 1px rgba(0,0,0,.04), 0 6px 16px -8px rgba(16,40,28,.3);")}>
      <span className="live-dot">
      </span>
      {"aozi is on X"}
      <span style={sx("color:#68716c;font-weight:500")}>
        {"Tag @aozibot"}
      </span>
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="14">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </span>
    <h1 className="disp" style={sx("margin:26px 0 0;font-size:164px;line-height:1;display:flex;align-items:center;justify-content:center;gap:18px;white-space:nowrap")}>
      <span>
        {"Meet"}
      </span>
      <span style={sx("display:inline-flex;margin:-26px -6px 0")}>
        <div aria-label="aozi" style={sx("position:relative;width:150px;height:150px;flex:none;filter:drop-shadow(0 12px 15px rgba(16,40,28,.22))")}>
          <div className="f-puff" style={sx("position:absolute;left:62%;top:4%;width:18%;height:18%;border-radius:50%;background:radial-gradient(closest-side, rgba(255,255,255,.95), rgba(255,255,255,.4) 55%, rgba(255,255,255,0));filter:blur(1px)")}>
          </div>
          <img alt="" className="" src="/img/m-base.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
          <div className="m-eye" style={sx("position:absolute;inset:0")}>
            <div className="f-look" style={sx("position:absolute;inset:0")}>
              <div data-pupil="" style={sx("position:absolute;inset:0;transition:transform .25s cubic-bezier(.2,.8,.2,1);")}>
                <img alt="" className="" src="/img/m-eyes.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
              </div>
            </div>
          </div>
          <img alt="" className="" src="/img/m-front.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
        </div>
      </span>
      <span>
        {"aozi "}
        <em>
          {"bot"}
        </em>
      </span>
    </h1>
    <p style={sx("margin:22px 0 0;max-width:720px;font-size:21px;line-height:1.45;color:#39413c;text-wrap:pretty")}>
      {"Tag @aozibot on X. It talks back like Ozzy's AI, and if your tweet has a picture, a name and a ticker, it launches the coin on Pons."}
    </p>
    <div style={sx("display:flex;gap:12px;margin-top:32px")}>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:56px;padding:0 24px;font-size:17px;")} target="_blank">
        <svg height="15" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot on X"}
      </a>
      <a className="b b2" href="/#coins" style={sx("height:56px;padding:0 24px;font-size:17px;")}>
        {"See the coins"}
      </a>
    </div>
    <div style={sx("display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:28px;font-size:14px;color:#39413c")}>
      <span>
        {"Just built"}
      </span>
        {justBuilt}
      </div>
</div>
    </>
  );
}

HeroVdL
export function HeroVdD({ justBuilt }: { justBuilt: ReactNode }) {
  return (
    <>
  <div style={sx("position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:56px 48px 54px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-size:14px;font-weight:600;white-space:nowrap;background:rgba(18,20,20,.88);color:#f2f3f1;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08), 0 6px 16px -8px rgba(0,0,0,.6);")}>
      <span className="live-dot">
      </span>
      {"aozi is on X"}
      <span style={sx("color:#8a908c;font-weight:500")}>
        {"Tag @aozibot"}
      </span>
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="14">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </span>
    <h1 className="disp" style={sx("margin:26px 0 0;font-size:164px;line-height:1;display:flex;align-items:center;justify-content:center;gap:18px;white-space:nowrap")}>
      <span>
        {"Meet"}
      </span>
      <span style={sx("display:inline-flex;margin:-26px -6px 0")}>
        <div aria-label="aozi" style={sx("position:relative;width:150px;height:150px;flex:none;filter:drop-shadow(0 12px 15px rgba(16,40,28,.22))")}>
          <div className="f-puff" style={sx("position:absolute;left:62%;top:4%;width:18%;height:18%;border-radius:50%;background:radial-gradient(closest-side, rgba(255,255,255,.95), rgba(255,255,255,.4) 55%, rgba(255,255,255,0));filter:blur(1px)")}>
          </div>
          <img alt="" className="" src="/img/m-base.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
          <div className="m-eye" style={sx("position:absolute;inset:0")}>
            <div className="f-look" style={sx("position:absolute;inset:0")}>
              <div data-pupil="" style={sx("position:absolute;inset:0;transition:transform .25s cubic-bezier(.2,.8,.2,1);")}>
                <img alt="" className="" src="/img/m-eyes.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
              </div>
            </div>
          </div>
          <img alt="" className="" src="/img/m-front.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
        </div>
      </span>
      <span>
        {"aozi "}
        <em>
          {"bot"}
        </em>
      </span>
    </h1>
    <p style={sx("margin:22px 0 0;max-width:720px;font-size:21px;line-height:1.45;color:#cfd3d0;text-wrap:pretty")}>
      {"Tag @aozibot on X. It talks back like Ozzy's AI, and if your tweet has a picture, a name and a ticker, it launches the coin on Pons."}
    </p>
    <div style={sx("display:flex;gap:12px;margin-top:32px")}>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:56px;padding:0 24px;font-size:17px;")} target="_blank">
        <svg height="15" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot on X"}
      </a>
      <a className="b b2" href="/#coins" style={sx("height:56px;padding:0 24px;font-size:17px;")}>
        {"See the coins"}
      </a>
    </div>
    <div style={sx("display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:28px;font-size:14px;color:#cfd3d0")}>
      <span>
        {"Just built"}
      </span>
        {justBuilt}
      </div>
</div>
    </>
  );
}

HeroVdD
export function HeroVmL({ justBuilt }: { justBuilt: ReactNode }) {
  return (
    <>
  <div style={sx("position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 16px 30px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-size:14px;font-weight:600;white-space:nowrap;background:rgba(255,255,255,.72);color:#111713;box-shadow:0 1px 1px rgba(0,0,0,.04), 0 6px 16px -8px rgba(16,40,28,.3);")}>
      <span className="live-dot">
      </span>
      {"aozi is on X"}
      <span style={sx("color:#68716c;font-weight:500")}>
        {"Tag @aozibot"}
      </span>
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="14">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </span>
    <h1 className="disp" style={sx("margin:20px 0 0;font-size:72px;line-height:.92;display:flex;flex-direction:column;align-items:center;gap:0")}>
      <span style={sx("display:flex;align-items:center;gap:6px")}>
        {"Meet "}
        <div aria-label="aozi" style={sx("position:relative;width:78px;height:78px;flex:none;filter:drop-shadow(0 6px 8px rgba(16,40,28,.22))")}>
          <div className="f-puff" style={sx("position:absolute;left:62%;top:4%;width:18%;height:18%;border-radius:50%;background:radial-gradient(closest-side, rgba(255,255,255,.95), rgba(255,255,255,.4) 55%, rgba(255,255,255,0));filter:blur(1px)")}>
          </div>
          <img alt="" className="" src="/img/m-base.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
          <div className="m-eye" style={sx("position:absolute;inset:0")}>
            <div className="f-look" style={sx("position:absolute;inset:0")}>
              <div data-pupil="" style={sx("position:absolute;inset:0;transition:transform .25s cubic-bezier(.2,.8,.2,1);")}>
                <img alt="" className="" src="/img/m-eyes.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
              </div>
            </div>
          </div>
          <img alt="" className="" src="/img/m-front.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
        </div>
      </span>
      <span>
        {"aozi "}
        <em>
          {"bot"}
        </em>
      </span>
    </h1>
    <p style={sx("margin:16px 0 0;max-width:340px;font-size:17px;line-height:1.45;color:#39413c;text-wrap:pretty")}>
      {"Tag @aozibot on X. It talks back like Ozzy's AI, and if your tweet has a picture, a name and a ticker, it launches the coin on Pons."}
    </p>
    <div style={sx("display:flex;flex-direction:column;width:100%;gap:12px;margin-top:22px")}>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:56px;padding:0 24px;font-size:17px;width:100%;")} target="_blank">
        <svg height="15" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot on X"}
      </a>
    </div>
    <div style={sx("display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:20px;font-size:14px;color:#39413c")}>
      <span>
        {"Just built"}
      </span>
        {justBuilt}
      </div>
</div>
    </>
  );
}

HeroVmL
export function HeroVmD({ justBuilt }: { justBuilt: ReactNode }) {
  return (
    <>
  <div style={sx("position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 16px 30px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;font-family:'Geist', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;font-size:14px;font-weight:600;white-space:nowrap;background:rgba(18,20,20,.88);color:#f2f3f1;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08), 0 6px 16px -8px rgba(0,0,0,.6);")}>
      <span className="live-dot">
      </span>
      {"aozi is on X"}
      <span style={sx("color:#8a908c;font-weight:500")}>
        {"Tag @aozibot"}
      </span>
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="14">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </span>
    <h1 className="disp" style={sx("margin:20px 0 0;font-size:72px;line-height:.92;display:flex;flex-direction:column;align-items:center;gap:0")}>
      <span style={sx("display:flex;align-items:center;gap:6px")}>
        {"Meet "}
        <div aria-label="aozi" style={sx("position:relative;width:78px;height:78px;flex:none;filter:drop-shadow(0 6px 8px rgba(16,40,28,.22))")}>
          <div className="f-puff" style={sx("position:absolute;left:62%;top:4%;width:18%;height:18%;border-radius:50%;background:radial-gradient(closest-side, rgba(255,255,255,.95), rgba(255,255,255,.4) 55%, rgba(255,255,255,0));filter:blur(1px)")}>
          </div>
          <img alt="" className="" src="/img/m-base.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
          <div className="m-eye" style={sx("position:absolute;inset:0")}>
            <div className="f-look" style={sx("position:absolute;inset:0")}>
              <div data-pupil="" style={sx("position:absolute;inset:0;transition:transform .25s cubic-bezier(.2,.8,.2,1);")}>
                <img alt="" className="" src="/img/m-eyes.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
              </div>
            </div>
          </div>
          <img alt="" className="" src="/img/m-front.webp" style={sx("position:absolute;inset:0;width:100%;height:100%;display:block;")} />
        </div>
      </span>
      <span>
        {"aozi "}
        <em>
          {"bot"}
        </em>
      </span>
    </h1>
    <p style={sx("margin:16px 0 0;max-width:340px;font-size:17px;line-height:1.45;color:#cfd3d0;text-wrap:pretty")}>
      {"Tag @aozibot on X. It talks back like Ozzy's AI, and if your tweet has a picture, a name and a ticker, it launches the coin on Pons."}
    </p>
    <div style={sx("display:flex;flex-direction:column;width:100%;gap:12px;margin-top:22px")}>
      <a className="b b1" href="https://x.com/intent/post?text=%40aozibot%20launch%20%24" rel="noopener noreferrer" style={sx("height:56px;padding:0 24px;font-size:17px;width:100%;")} target="_blank">
        <svg height="15" style={sx("display:block;flex:none")} viewBox="0 0 24 24" width="15">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
        </svg>
        {"Tag @aozibot on X"}
      </a>
    </div>
    <div style={sx("display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:20px;font-size:14px;color:#cfd3d0")}>
      <span>
        {"Just built"}
      </span>
        {justBuilt}
      </div>
</div>
    </>
  );
}

HeroVmD
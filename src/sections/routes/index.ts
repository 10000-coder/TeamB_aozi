/**
 * Route sections, generated from the captured reference DOM by
 * `tools/gen_route_pages.py`. Each page ships one component per layout variant
 * (desktop/mobile x light/dark); the app renders the active one.
 *
 * The stylesheets are per-route, exactly as the reference inlines a different
 * one per page. They are scoped under the route's own class (`.lg`, `.fw`), so
 * bundling them together cannot affect the home page.
 */
import '../../styles/route-docs.css';
import '../../styles/route-flywheel.css';
import '../../styles/route-profile.css';
import '../../styles/route-launch.css';

export { DocsVdD, DocsVdL, DocsVmD, DocsVmL } from './docs';
export { FlywheelVdD, FlywheelVdL, FlywheelVmD, FlywheelVmL } from './flywheel';
export { LaunchVdD, LaunchVdL, LaunchVmD, LaunchVmL } from './launch';
export { ProfileVdD, ProfileVdL, ProfileVmD, ProfileVmL } from './profile';

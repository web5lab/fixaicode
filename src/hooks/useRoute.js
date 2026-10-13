import { useSyncExternalStore } from "react";
export function resolveRoute(path) {
  const normalized = path.replace(/\/$/, "") || "/";
  if (normalized === "/") return { page: "home" };
  if (normalized === "/blog") return { page: "blog" };
  if (normalized.startsWith("/blog/"))
    return { page: "post", slug: normalized.slice(6) };
  return { page: "not-found" };
}
function normalizeLegacyLink() {
  const legacy = window.location.hash.match(/^#\/post\/(.+)$/);
  if (legacy || window.location.hash === "#/") {
    window.history.replaceState(null, "", legacy ? `/blog/${legacy[1]}` : "/");
    return true;
  }
  return false;
}
function subscribe(callback) {
  normalizeLegacyLink();
  function update() {
    normalizeLegacyLink();
    callback();
    requestAnimationFrame(() => {
      if (window.location.hash) {
        document
          .getElementById(window.location.hash.slice(1))
          ?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        const main = document.getElementById("main");
        main?.setAttribute("tabindex", "-1");
        main?.focus({ preventScroll: true });
      }
    });
  }
  function onClick(event) {
    const anchor = event.target.closest("a");
    if (
      !anchor ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      anchor.target ||
      anchor.hasAttribute("download")
    )
      return;
    const url = new URL(anchor.href);
    if (
      url.origin !== window.location.origin ||
      (!["/", "/blog"].includes(url.pathname) &&
        !url.pathname.startsWith("/blog/"))
    )
      return;
    if (url.pathname === window.location.pathname && url.hash) return;
    event.preventDefault();
    window.history.pushState(null, "", url.pathname + url.hash);
    update();
  }
  const onHashChange = () => {
    if (normalizeLegacyLink()) update();
  };
  window.addEventListener("popstate", update);
  window.addEventListener("hashchange", onHashChange);
  document.addEventListener("click", onClick);
  return () => {
    window.removeEventListener("popstate", update);
    window.removeEventListener("hashchange", onHashChange);
    document.removeEventListener("click", onClick);
  };
}
function getPath() {
  return window.location.pathname;
}
export function useRoute(initialPath = "/") {
  const path = useSyncExternalStore(subscribe, getPath, () => initialPath);
  return resolveRoute(path);
}

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Youtube: "https://www.youtube.com/channel/UCnCWjodIPj9JUDFdgCaL4LA",
      Facebook: "facebook.com/pinkyhongphuong",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
    Component.Graph(),
    Component.Backlinks(),
    Component.DesktopOnly(Component.Links({
      title: "Những quyển sách khác", // apply no filter function, every file and folder will visible
    })),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.TableOfContents(),
    // Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [],
}

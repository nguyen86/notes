import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Không có tiêu đề",
    description: "Không có mô tả",
  },
  components: {
    callout: {
      note: "Ghi Chú",
      abstract: "Tóm Tắt",
      info: "Thông tin",
      todo: "Việc Cần Làm",
      tip: "Gợi Ý",
      success: "Thành Công",
      question: "Câu hỏi",
      warning: "Cảnh Báo",
      failure: "Thất Bại",
      danger: "Nguy Hiểm",
      bug: "Lỗi",
      example: "Ví Dụ",
      quote: "Trích Dẫn",
    },
    backlinks: {
      title: "Liên Kết Ngược",
      noBacklinksFound: "Không có liên kết ngược được tìm thấy",
    },
    themeToggle: {
      lightMode: "Sáng",
      darkMode: "Tối",
    },
    explorer: {
      title: "Trong trang web này",
    },
    footer: {
      createdWith: "Được tạo bởi",
    },
    graph: {
      title: "Biểu đồ liên kết",
    },
    recentNotes: {
      title: "Bài viết gần đây",
      seeRemainingMore: ({ remaining }) => `Xem thêm ${remaining} bài nữa →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Bao gồm ${targetSlug}`,
      linkToOriginal: "Liên Kết Gốc",
    },
    search: {
      title: "Tìm kiếm",
      searchBarPlaceholder: "Tìm kiếm thông tin",
    },
    tableOfContents: {
      title: "Nội dung chính",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `đọc trong ${minutes} phút`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Những bài gần đây",
      lastFewNotes: ({ count }) => `Có ${count} bài gần đây`,
    },
    error: {
      title: "Không Tìm Thấy",
      notFound: "Trang này được bảo mật hoặc không tồn tại.",
    },
    folderContent: {
      folder: "Thư Mục",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "Có 1 bài trong thư mục này." : `Có ${count} bài trong thư mục này.`,
    },
    tagContent: {
      tag: "Thẻ",
      tagIndex: "Thẻ Mục Lục",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 bài gắn thẻ này." : `${count} bài gắn thẻ này.`,
      showingFirst: ({ count }) => `Hiển thị ${count} thẻ đầu.`,
      totalTags: ({ count }) => `Tìm thấy tổng cộng ${count} thẻ.`,
    },
  },
} as const satisfies Translation

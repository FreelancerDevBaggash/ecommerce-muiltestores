// export function generateSlug(title) {
//     const slug = title
//       .toLowerCase() // Convert the title to lowercase
//       .replace(/\s+/g, "-") // Replace spaces with dashes
//       .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
//       .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
//       .replace(/^\-+/, "") // Remove dashes from the beginning
//       .replace(/\-+$/, ""); // Remove dashes from the end
  
//     return slug;
//   }

export function generateSlug(title) {
  const slug = title
    .toLowerCase()  // تحويل النص إلى أحرف صغيرة
    .replace(/\s+/g, "-")  // استبدال المسافات بـ "-"
    .replace(/[^\w\-\u0621-\u064A]+/g, "")  // إزالة الأحرف غير المطلوبة باستثناء الحروف العربية (استخدمنا \u0621-\u064A للإشارة إلى الحروف العربية)
    .replace(/\-\-+/g, "-")  // استبدال الخطوط المتكررة بـ "-"
    .replace(/^\-+/, "")  // إزالة الخطوط من البداية
    .replace(/\-+$/, "");  // إزالة الخطوط من النهاية

  return slug;
}

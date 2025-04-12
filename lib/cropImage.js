export default async function getCroppedImg(imageSrc, pixelCrop) {
  try {
    // تحميل الصورة باستخدام الدالة المساعدة createImage
    const image = await createImage(imageSrc);
    
    // إنشاء عنصر canvas جديد
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // تعيين أبعاد الـ canvas لتكون مساوية لأبعاد المنطقة المطلوب قصها
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // رسم الجزء المحدد من الصورة على الـ canvas
    // المعاملات في drawImage:
    // 1. الصورة الأصلية
    // 2-5. إحداثيات وأبعاد المنطقة التي نريد قصها من الصورة الأصلية
    // 6-9. إحداثيات وأبعاد المنطقة التي نريد رسم الصورة عليها داخل الـ canvas
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // تحويل محتوى الـ canvas إلى Blob وإرجاع رابط URL للـ Blob الناتج
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob)); // إنشاء رابط للصورة المقطوعة بصيغة Blob
      }, "image/jpeg");
    });
  } catch (error) {
    console.error("Error cropping image:", error);
    throw error; // يتم إلقاء الخطأ إذا فشلت عملية تحميل الصورة أو عملية القص
  }
}
  
// دالة مساعدة لتحميل الصورة من URL وإنشاء عنصر صورة جديد
function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous"; // لتجنب مشاكل CORS في حال كانت الصورة من مصدر خارجي
    image.src = url;

    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error); // إلقاء الخطأ في حال حدوث مشكلة أثناء تحميل الصورة
  });
}

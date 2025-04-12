// export async function getData(endpoint) {
//     try {
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       console.log(`${baseUrl}/api/${endpoint}`);
//       const response = await fetch(`${baseUrl}/api/${endpoint}`, {
//         cache: "no-store",
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }


// export async function getData(endpoint, { mode = 'static', revalidate = 120 } = {}) {
//   try {
//     // تأكد من إزالة الشرط المائلة الزائدة في النهاية
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, '');
//     // إزالة الشرط المائلة الزائدة من البداية
//     const cleanEndpoint = endpoint.replace(/^\//, '');
    
//     const url = `${baseUrl}/api/${cleanEndpoint}`;
//     console.log(`Fetching URL: ${url}`);
    
//     // إعداد الخيارات بناءً على وضع البيانات المطلوبة
//     let options = {};
//     if (mode === 'real-time') {
//       // بيانات ديناميكية: جلب البيانات مباشرة في كل طلب
//       options = { cache: 'no-store' };
//     } else if (mode === 'static') {
//       // بيانات ثابتة: استخدام التخزين المؤقت مع إعادة التحقق
//       options = { cache: 'force-cache', next: { revalidate } };
//     } else {
//       throw new Error(`Invalid mode: ${mode}`);
//     }
    
//     const response = await fetch(url, options);
//     if (response.status === 404) {
//       // معالجة خاصة لحالة 404
//       return null; // أو أي قيمة مناسبة تشير إلى عدم وجود البيانات
//     }
  
//     if (!response.ok) {
//       console.error(`Error fetching ${endpoint}: ${response.status} ${response.statusText}`);
//       throw new Error('Failed to fetch data');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("getData error:", error);
//     throw error;
//   }
// }

// export async function getData(endpoint, { mode = 'static', revalidate = 120 } = {}) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') ?? '';
//     const cleanEndpoint = endpoint.replace(/^\//, '');
//     const url = `${baseUrl}/api/${cleanEndpoint}`;

//     const options =
//       mode === 'real-time'
//         ? { cache: 'no-store' }
//         : mode === 'static'
//         ? { cache: 'force-cache', next: { revalidate } }
//         : null;

//     if (!options) {
//       console.error(`getData error: Invalid mode '${mode}'`);
//       return null || 0;
//     }

//     const response = await fetch(url, options);

//     if (response.status === 404) {
//       console.warn(`getData warning: Endpoint not found (${url})`);
//       return null || 0;
//     }

//     if (!response.ok) {
//       console.error(`getData error: ${response.status} ${response.statusText}`);
//       return null || 0;
//     }

//     const data = await response.json();

//     if (!data || (Array.isArray(data) && data.length === 0)) {
//       console.warn(`getData warning: Empty data from ${url}`);
//       return null || 0;
//     }

//     return data;
//   } catch (error) {
//     console.error("getData exception:", error);
//     return null || 0;
//   }
// }


// export async function getData(endpoint, { mode = 'static', revalidate = 120 } = {}) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';
//     const cleanEndpoint = endpoint.replace(/^\//, '');
//     const url = `${baseUrl}/api/${cleanEndpoint}`;

//     let options = {};
//     if (mode === 'real-time') {
//       options = { cache: 'no-store' };
//     } else {
//       options = { cache: 'force-cache', next: { revalidate } };
//     }

//     const response = await fetch(url, options);

//     if (response.status === 404) return []; // ✔️ يرجّع مصفوفة فاضية
//     if (!response.ok) {
//       console.error(`Error fetching ${endpoint}: ${response.status}`);
//       return [];
//     }

//     const data = await response.json();

//     // ✔️ التحويل التلقائي إلى مصفوفة حسب هيكل الاستجابة
//     if (Array.isArray(data)) return data;
//     if (Array.isArray(data?.data)) return data.data;

//     // نحاول نرجع أول key يحتوي على مصفوفة
//     for (const key in data) {
//       if (Array.isArray(data[key])) return data[key];
//     }

//     return []; // fallback آمن
//   } catch (error) {
//     console.error("getData error:", error);
//     return [];
//   }
// }


export async function getData(endpoint, { mode = 'static', revalidate = 120 } = {}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';
    const cleanEndpoint = endpoint.replace(/^\//, '');
    const url = `${baseUrl}/api/${cleanEndpoint}`;

    const options =
      mode === 'real-time'
        ? { cache: 'no-store' }
        : { cache: 'force-cache', next: { revalidate } };

    const response = await fetch(url, options);

    if (response.status === 404) return []; // ✅ رجّع مصفوفة فاضية لو ما لقى شيء
    if (!response.ok) {
      console.error(`Error fetching ${endpoint}: ${response.status}`);
      return [];
    }

    // ✅ إذا كل شيء تمام، رجّع البيانات مثل ما هي بدون أي تعديل
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("getData error:", error);
    return []; // ✅ fallback آمن
  }
}

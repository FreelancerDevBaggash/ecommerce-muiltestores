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
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';
//     const cleanEndpoint = endpoint.replace(/^\//, '');
//     const url = `${baseUrl}/api/${cleanEndpoint}`;

//     const options =
//       mode === 'real-time'
//         ? { cache: 'no-store' }
//         : { cache: 'force-cache', next: { revalidate } };

//     const response = await fetch(url, options);

//     if (response.status === 404) return []; // ✅ رجّع مصفوفة فاضية لو ما لقى شيء
//     if (!response.ok) {
//       console.error(`Error fetching ${endpoint}: ${response.status}`);
//       return [];
//     }

//     // ✅ إذا كل شيء تمام، رجّع البيانات مثل ما هي بدون أي تعديل
//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.error("getData error:", error);
//     return []; // ✅ fallback آمن
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
        : { next: { revalidate } }; // ✅ بدون cache: 'force-cache'

    const response = await fetch(url, options);

    if (response.status === 404) return [];
    if (!response.ok) {
      console.error(`Error fetching ${endpoint}: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("getData error:", error);
    return [];
  }
}

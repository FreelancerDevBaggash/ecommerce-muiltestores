import db from "@/lib/db";
import { NextResponse } from "next/server";

// GET لاسترجاع تخصيص باستخدام id
export async function GET(request, { params: { slug } }) {
    try {
        const customization = await db.customization.findUnique({
            where: {
                storeId : slug,
            },
        });

        // التأكد من وجود التخصيص
        if (!customization) {
            return NextResponse.json(
                { message: "Customization not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(customization);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to fetch customization",
                error,
            },
            { status: 500 }
        );
    }
}

// POST لإنشاء تخصيص جديد
// export async function POST(request) {
//     try {
//         const {
//             primaryColor,
//             secondaryColor,
//             accentColor,
//             backgroundColor,
//             fontFamily,
//             isActive,
//             storeId,
//         } = await request.json();

//         // التحقق إذا كان التخصيص موجودًا مسبقًا لنفس المتجر
//         const existingCustomization = await db.customization.findUnique({
//             where: {
//                 storeId,
//             },
//         });

//         if (existingCustomization) {
//             return NextResponse.json(
//                 { message: "Customization already exists for this store" },
//                 { status: 409 }
//             );
//         }

//         const newCustomization = await db.customization.create({
//             data: {
//                 primaryColor,
//                 secondaryColor,
//                 accentColor,
//                 backgroundColor,
//                 fontFamily,
//                 isActive,
//                 storeId,
//             },
//         });

//         return NextResponse.json(newCustomization);
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             {
//                 message: "Failed to create customization",
//                 error,
//             },
//             { status: 500 }
//         );
//     }
// }

// // PUT لتحديث تخصيص معين
// export async function PUT(request, { params: { id } }) {
//     try {
//         const {
//             primaryColor,
//             secondaryColor,
//             accentColor,
//             backgroundColor,
//             fontFamily,
//             isActive,
//         } = await request.json();

//         const existingCustomization = await db.customization.findUnique({
//             where: { id },
//         });

//         if (!existingCustomization) {
//             return NextResponse.json(
//                 { message: "Customization not found" },
//                 { status: 404 }
//             );
//         }

//         const updatedCustomization = await db.customization.update({
//             where: { id },
//             data: {
//                 primaryColor,
//                 secondaryColor,
//                 accentColor,
//                 backgroundColor,
//                 fontFamily,
//                 isActive,
//             },
//         });

//         return NextResponse.json(updatedCustomization);
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             {
//                 message: "Failed to update customization",
//                 error,
//             },
//             { status: 500 }
//         );
//     }
// }

// // DELETE لحذف تخصيص باستخدام id
// export async function DELETE(request, { params: { id } }) {
//     try {
//         const existingCustomization = await db.customization.findUnique({
//             where: {
//                 id,
//             },
//         });

//         if (!existingCustomization) {
//             return NextResponse.json(
//                 { message: "Customization not found" },
//                 { status: 404 }
//             );
//         }

//         const deletedCustomization = await db.customization.delete({
//             where: {
//                 id,
//             },
//         });

//         return NextResponse.json(deletedCustomization);
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             {
//                 message: "Failed to delete customization",
//                 error,
//             },
//             { status: 500 }
//         );
//     }
// }

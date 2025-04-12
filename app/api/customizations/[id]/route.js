import db from "@/lib/db"
import { NextResponse } from "next/server";

// GET لاسترجاع تخصيص باستخدام id
export async function GET(request, { params: { id } }) {
    try {
        const customization = await db.customization.findUnique({
            where: {
                id,
            },
        });

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
                message: "Failed to Fetch Customization",
                error,
            },
            { status: 500 }
        );
    }
}

// DELETE لحذف تخصيص باستخدام id
export async function DELETE(request, { params: { id } }) {
    try {
        const existingCustomization = await db.customization.findUnique({
            where: {
                id,
            },
        });

        if (!existingCustomization) {
            return NextResponse.json(
                { message: "Customization Not Found" },
                { status: 404 }
            );
        }

        const deletedCustomization = await db.customization.delete({
            where: {
                id,
            },
        });

        return NextResponse.json(deletedCustomization);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to Delete Customization",
                error,
            },
            { status: 500 }
        );
    }
}

// PUT لتحديث تخصيص باستخدام id
export async function PUT(request, { params: { id } }) {
    try {
        // استلام البيانات من الطلب
        const data = await request.json();

        // تحقق من وجود التخصيص في قاعدة البيانات باستخدام الـ id
        const existingCustomization = await db.customization.findUnique({
            where: { id: id },
        });

        if (!existingCustomization) {
            return NextResponse.json(
                { message: "Customization Not Found" },
                { status: 404 }
            );
        }

        // تحديث التخصيص في قاعدة البيانات
        const updatedCustomization = await db.customization.update({
            where: { id: id },
            data: {
                primaryColor: data.primaryColor,
                secondaryColor: data.secondaryColor,
                accentColor: data.accentColor,
                backgroundColor: data.backgroundColor,
                fontFamily: data.fontFamily,
                isActive: data.isActive,
                storeId: data.storeId,
            },
        });

        // إرجاع التخصيص المحدث
        return NextResponse.json(updatedCustomization);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Failed to Update Customization", error },
            { status: 500 }
        );
    }
}

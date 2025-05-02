import { NextResponse } from "next/server";
import db from "../../../lib/db"

export async function POST(request) {
    try {
        const {
            title,
            slug,
            imageUrl,
            description,
            isActive ,
            categoryId,
            storeId
        } = await request.json();

        // التحقق من وجود القسم الفرعي مسبقاً
        const existingsubcategory = await db.subCategory.findUnique({
            where: {
                slug
            }
        });

        if (existingsubcategory) {
            return NextResponse.json(
                {
                    data: null,
                    message: "subcategory already exists"
                },
                { status: 409 }
            );
        }

        const newsubcategory = await db.subCategory.create({
            data: {
                title,
                slug,
                imageUrl,
                description,
                isActive,
                categoryId,
                storeId,
            }
        });

        console.log(newsubcategory);
        return NextResponse.json(newsubcategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create SubCategory",
                error,
            }, { status: 500 }
        )
    }
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get('storeId');
    const categoryId = searchParams.get('categoryId');
    const searchTerm = searchParams.get('search');
    const page = searchParams.get('page') || 1;
    const pageSize = 100;

    // console.log("Received storeId:", storeId);
    // console.log("Received categoryId:", categoryId);

    let where = {};

    if (categoryId) {
        where.categoryId = categoryId;
    }

    if (storeId && storeId !== "undefined") {
        where.storeId = storeId;
    }

    try {
        if (searchTerm) {
            const subCategories = await db.SubCategory.findMany({
                where: {
                    ...where,
                    OR: [
                        { title: { contains: searchTerm, mode: 'insensitive' } },
                        { description: { contains: searchTerm, mode: 'insensitive' } }
                    ]
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return NextResponse.json(subCategories);
        } else if (page) {
            const subcategories = await db.SubCategory.findMany({
                where,
                skip: (parseInt(page) - 1) * parseInt(pageSize),
                take: parseInt(pageSize),
                orderBy: {
                    createdAt: "desc"
                }
            });
            return NextResponse.json(subcategories);
        } else {
            const subcategories = await db.SubCategory.findMany({
                where,
                orderBy: {
                    createdAt: "desc"
                }
            });
            return NextResponse.json(subcategories);
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to Fetch SubCategories",
                error,
            }, { status: 500 }
        )
    }
}
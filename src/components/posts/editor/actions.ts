'use server';

import {validateRequest} from "@/auth";
import {creatPostSchema} from "@/lib/validation";
import prisma from "@/lib/prisma";

export async function submitPost(input: string) {
    const {user} = await validateRequest();

    if (!user) throw new Error("Unauthorized");

    const {content} = creatPostSchema.parse({content: input});

    await prisma.post.create({
        data: {
            content,
            userId: user.id,
        }
    })
}
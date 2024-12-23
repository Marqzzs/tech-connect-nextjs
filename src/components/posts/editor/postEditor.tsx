'use client';

import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {submitPost} from "@/components/posts/editor/actions";
import UserAvatar from "@/components/userAvatar";
import {useSession} from "@/app/(main)/sessionProvider";
import {Button} from "@/components/ui/button";
import './styles.css'

export default function PostEditor() {
    const {user} = useSession()

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false,
            }),
            Placeholder.configure({
                placeholder: "O que há de novo?"
            })
        ]
    });

    const input = editor?.getText({
        blockSeparator: "\n",
    }) || "";

    async function onSubmit() {
         await submitPost(input);
         editor?.commands.clearContent()
    }

    return (
        <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
            <div className="flex gap-5">
                <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
                <EditorContent editor={editor} className="w-full max-h-[20rem] overflow-y-auto bg-background font-sans rounded-2xl py-3 px-5" />
            </div>
            <div className="flex justify-end">
                <Button onClick={onSubmit} disabled={!input.trim()} className="min-w-20 font-sans">
                    Post
                </Button>
            </div>
        </div>
    )
}
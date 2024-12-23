import PostEditor from "@/components/posts/editor/postEditor";

export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-slate-50">
      <div className="w-full">
          <PostEditor />
      </div>
    </main>
  );
}

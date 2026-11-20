import NoteEdit from "./NoteEdit";
import { Suspense } from "react";

export default async function Note() {



    return (
        <Suspense fallback={<p className="text-center my-20">Loading Note...</p>}>
            <NoteEdit />
        </Suspense>
    );
}
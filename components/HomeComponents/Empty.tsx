'use client';
import {
    Inbox
} from 'lucide-react';

export default function Empty() {
    return (
        <div className="flex flex-1 w-full justify-center items-center py-7">
            <div className="flex flex-col justify-center items-center gap-2 font-mono text-base text-text/70">
                <Inbox className="size-12 text-text/p-60" />
                <h1>Voce ainda não criou um projeto</h1>
            </div>
        </div>
    );
}
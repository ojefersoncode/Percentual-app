'use client';
import {
    Inbox
} from 'lucide-react';

export default function Empty() {
    return (
        <div className="flex flex-1 w-full justify-center items-center py-7">
            <div className="flex flex-col justify-center items-center font-mono text-base text-text/70">
                <Inbox className="size-16 max-md:size-12 text-background/70 dark:text-text/80" />
                
            </div>
        </div>
    );
}
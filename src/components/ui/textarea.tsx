import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular h-33.5 w-full resize-none rounded-md bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-500 md:rounded-xl md:px-4 md:py-2.25',
        'focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

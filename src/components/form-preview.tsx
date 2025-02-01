export const FormPreview = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow h-fit">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          Create your account
        </div>
        <div className="text-sm text-zinc-500">
          Create your account to try the project.
        </div>
      </div>
      <div className="p-6 pt-0 flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="flex h-9 w-full border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-[4px] focus:border-[var(--color)]"
            id="email"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="flex h-9 w-full border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-[4px] focus:border-[var(--color)]"
            id="password"
            placeholder="Enter your password..."
          />
        </div>
      </div>
      <div className="items-center p-6 pt-0 flex flex-col gap-4">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2 w-full bg-[var(--color)] hover:bg-[var(--hoverColor)] rounded-[4px]">
          Create account
        </button>
      </div>
    </div>
  );
};

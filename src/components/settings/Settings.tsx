import TestSettings from "./sections/TestSettings";

export default function Settings() {
  return (
    <main className="min-h-screen w-full bg-[#c7afa5] px-6 py-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 flex flex-col   items-center">
          <h1 className="font-[Courier_Prime] text-3xl font-semibold text-[#49372a]">
            Settings
          </h1>

          <p className="mt-1 font-[Roboto_Mono] text-md font-medium text-[#72584e]">
            Customize your Sloth Typing experience, according to your
            preference.
          </p>
        </div>
      </div>
      <TestSettings />
    </main>
  );
}

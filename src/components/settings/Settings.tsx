import TestSettings from "./sections/TestSettings";
import BehaviorSettings from "./sections/BehaviourSettings";
import AppearanceSettings from "./sections/AppearanceSettings";
import TypingExperienceSettings from "./sections/TypingExperienceSettings";

export default function Settings() {
  return (
    <main className="min-h-screen w-full bg-(--background) px-6 py-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 flex flex-col   items-center">
          <h1 className="font-[Courier_Prime] text-3xl font-semibold text-(--text)">
            Settings
          </h1>

          <p className="mt-1 font-[Roboto_Mono] text-md font-medium text-(--muted-text)">
            Customize your Sloth Typing experience, according to your
            preference.
          </p>
        </div>
      </div>
      <TestSettings />
      <BehaviorSettings />
      <AppearanceSettings />
      <TypingExperienceSettings />
    </main>
  );
}

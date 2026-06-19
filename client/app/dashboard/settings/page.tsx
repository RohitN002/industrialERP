import ProfileForm from "@/modules/components/profile/ProfileForm";

export default function SettingsPage() {
  return (
    <div className="flex-1">
      <h1 className="text-center bg-red-500">Settings</h1>
      <ProfileForm />
    </div>
  );
}

"use client";

import { useProfile } from "@/lib/store/useProfile";
import ProfileForm from "@/modules/components/profile/ProfileForm";

export default function ProfilePage() {
  const { data: organization, isLoading, isError } = useProfile();
  return (
    <div className="flex flex-col bg-background mt-10">
      <h3 className="text-2xl font-bold">Organization Profile</h3>
      <ProfileForm />
    </div>
  );
}

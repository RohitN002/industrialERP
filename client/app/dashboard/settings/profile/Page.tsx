"use client";

import ProfileForm from "@/modules/components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="flex flex-col bg-background mt-10">
      <h3 className="text-2xl font-bold">Organization Profile</h3>
      <ProfileForm />
    </div>
  );
}

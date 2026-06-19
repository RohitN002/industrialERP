"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { countries } from "@/shared/constants/countryOptions.constant";
import { useIndustries } from "@/lib/store/useProfile";
import { currencies } from "@/shared/constants/baseCurrrency.constant";
import { dateFormats } from "@/shared/constants/dateFormat.constant";
import { fiscalYearStartMonths } from "@/shared/constants/fisicalYear.constant";
import { languages } from "@/shared/constants/languages.contant";
import { timezones } from "@/shared/constants/timeZone.constant";
import SearchableSelect from "@/shared/hooks/searchableSelect.hook";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select/base";

const ProfileForm = ({ initialData, onSubmit, isLoading }: any) => {
  const [file, setFile] = useState<File | null>(null);
  const { data: industry } = useIndustries();
  console.log("industy ", industry);
  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

  const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/bmp",
  ];
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver as any,
    defaultValues: initialData
      ? {
          name: initialData.name,
          industryId: initialData.industryId,
          country: initialData.country,
          website: initialData.website,
          address: initialData.address,
          city: initialData.city,
          state: initialData.state,
          zip: initialData.zip,
          phone: initialData.phone,
          fax: initialData.fax,
          logo: initialData.logo,
        }
      : {},
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const selectedFile = files[0];

    // Validate file type
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      toast.error("Supported Files: JPG, JPEG, PNG, GIF, BMP.");

      e.target.value = "";
      setFile(null);
      return;
    }

    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      toast.error("Maximum File Size: 1 MB.");

      e.target.value = "";
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  return (
    <form
      className="max-w-5xl mx-auto p-8"
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
    >
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
        <div className="border-b border-slate-200 px-8 py-5">
          <h1 className="text-2xl font-semibold text-slate-800">
            Organization Profile
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your organization details and branding.
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Logo */}
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Organization Logo
            </h2>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Organization Logo"
                  className="w-32 h-32 mb-4"
                />
              )}
              {file && (
                <p className="text-sm text-slate-600">Selected: {file.name}</p>
              )}
              <input
                type="file"
                className="block w-full text-sm text-slate-600"
                onChange={onFileChange}
              />

              <p className="text-xs text-slate-500 mt-3 leading-5">
                This logo will be displayed in transaction PDFs and email
                notifications.
                <br />
                Preferred Image Dimensions: 240 × 240 pixels @ 72 DPI.
                <br />
                Supported Files: JPG, JPEG, PNG, GIF, BMP.
                <br />
                Maximum File Size: 1 MB.
              </p>
            </div>
          </section>

          {/* Organization Details */}
          <section className=" gap-4 pt-6 border-t border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Organization Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Organization Name
                </label>

                <input
                  type="text"
                  className="w-full h-11 px-3 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Industry
                </label>
                <Controller
                  name="industry"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <SearchableSelect
                        options={
                          industry
                            ? industry.map((item: any) => ({
                                value: item.id,
                                label: item.name,
                              }))
                            : []
                        }
                        value={field.value}
                        onChange={field.onChange}
                      />

                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Country
                </label>

                <Controller
                  name={"country"}
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <SearchableSelect
                        options={
                          countries
                            ? countries.map((item: any) => ({
                                value: item.value,
                                label: item.label,
                              }))
                            : []
                        }
                        value={field.value}
                        onChange={field.onChange}
                      />

                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Website URL
                </label>

                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full h-11 px-3 border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Address */}
          <section className="gap-4 pt-6 border-t border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Organization Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                placeholder="Attention"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="House / Street No."
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="Building / Tower / Block"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="Locality"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="Landmark (Optional)"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="City"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="Pincode"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />

              <input
                placeholder="Fax Number"
                className="h-11 px-3 border border-slate-300 rounded-lg text-slate-700"
              />
            </div>
          </section>
          <section className=" gap-4 pt-6 border-t border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Regional Preferences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Base Currency */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Base Currency
                </label>

                <Controller
                  control={control}
                  name="baseCurrency"
                  render={({ field, fieldState }) => (
                    <SearchableSelect
                      options={
                        currencies
                          ? currencies.map((item: any) => ({
                              value: item.value,
                              label: item.label,
                            }))
                          : []
                      }
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                <p className="text-xs text-slate-500 mt-1">
                  Currency used for invoices and reports.
                </p>
              </div>

              {/* Fiscal Year */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Fiscal Year
                </label>

                <Controller
                  name="fiscalYear"
                  control={control}
                  render={({ field, fieldState }) => (
                    <SearchableSelect
                      options={
                        fiscalYearStartMonths
                          ? fiscalYearStartMonths.map((item: any) => ({
                              value: item.value,
                              label: item.label,
                            }))
                          : []
                      }
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Organization Language */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Organization Language
                </label>
                <Controller
                  control={control}
                  name="organizationLanguage"
                  render={({ field }) => (
                    <SearchableSelect
                      options={languages}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Communication Language */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Communication Language
                </label>

                <Controller
                  control={control}
                  name="communicationLanguage"
                  render={({ field, fieldState }) => (
                    <SearchableSelect
                      options={languages}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Time Zone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Time Zone
                </label>

                <Controller
                  name="timeZone"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      options={timezones}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              {/* Date Format */}
              <div>
                <label className="block text-sm font-medium  text-slate-700 mb-2">
                  Date Format
                </label>

                <Controller
                  name="dateFormat"
                  control={control}
                  render={({ field }) => (
                    <SearchableSelect
                      options={dateFormats}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
          </section>

          {/* <section className="mt-5">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">
              Additonal fields{" "}
            </h2>
            <button className="text-md text-slate-800">
              <span className="bg-blue-600 hover:bg-blue-700 text-white font-sm   px-1 rounded-lg transition mx-2">
                +
              </span>
              New field
            </button>
            <div className="border"></div>
          </section> */}
          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition"
            >
              Save Changes
            </button>

            <button
              type="reset"
              className="border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;

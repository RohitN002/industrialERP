"use client";

const ProfileForm = () => {
  const industry = ["", "Manufacturing", "IT", "Healthcare", "Finance"];
  const CountryOptions = [
    { value: "", label: "Select" },
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    { value: "Canada", label: "Canada" },
  ];
  return (
    <div className="flex flex-col mt-10">
      {" "}
      profile form
      <form action="">
        <div>
          <label className="text-lg font-semibold">Organization Logo</label>
          <input type="file" placeholder="Upload Your organization logo" />
          <span>
            This logo will be displayed in transaction PDFs and email
            notifications. Preferred Image Dimensions: 240 x 240 pixels @ 72 DPI
            Supported Files: jpg, jpeg, png, gif, bmp Maximum File Size: 1MB
          </span>
        </div>
        <div>
          <label htmlFor="OrganizationName">Orgainzation Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Industry </label>
          <select name="" id="">
            {industry.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Organization Country</label>
          <select name="" id="">
            {CountryOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Organization Address</label>
          <input type="text" className="" placeholder="Attention" />
          <input type="text" className="" placeholder="House/Street No." />
          <input
            type="text"
            className=""
            placeholder="Building/Tower/Block/Society Name"
          />
          <input type="text" className="" placeholder="Locality" />
          <input type="text" className="" placeholder="Landmark (optional)" />
          <input type="text" className="" placeholder="city" />
          <input type="text" className="" placeholder="Pincode" />
          <input type="text" placeholder="fax number" />
        </div>
        <div>
          <label htmlFor="">Website url</label>
          <input type="text" />
          {/* <button>Validate</button> */}
        </div>
        <div className="flex items-center gap-4">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

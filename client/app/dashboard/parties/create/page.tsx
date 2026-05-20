const createPartiesPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3>Create Parties</h3>
        <button>Party settings</button>
        <button>Paty settings</button>
        <button>Save and new</button>
        <button>save</button>
      </div>
      <div className="flex flex-col gap-5 w-2/3 ">
        <div>
          <label htmlFor="">Party name *</label>
          <input type="text" name="" placeholder="Enter Name" id="" />
        </div>
        <div>
          <label htmlFor="">Mobile number</label>
          <input type="number" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="mail" placeholder="Enter Email " />
        </div>
      </div>
      <div className="">
        <label htmlFor="">Opening balance</label>
        <input type="number" name="" placeholder="0.00" id="" />
        <select name="" id="">
          <option value="toCollect">To Collect</option>
          <option value="toPay">To Pay</option>
        </select>
      </div>
      <div>
        <label htmlFor="gstin">GSTIN</label>
        <input type="text" name="gstin" id="" placeholder="Enter Gst Number" />
        <span>
          Note:You can auto fetch the details by entring the PAN or GST Number
        </span>
      </div>
      <div>
        <label htmlFor="pan">PAN</label>
        <input type="text" name="pan" id="" placeholder="Enter PAN Number" />
      </div>
      <div>
        ;<label htmlFor="">Party type*</label>
        <select name="" id="">
          <option disabled>Select Party Type</option>
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Party category</label>
        <select name="" id="">
          <option disabled>Select Party category</option>
        </select>
      </div>
      <div>
        <h3>Address</h3>
        <div>
          <label htmlFor="">Biling address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Biling Address"
            id=""
          />
        </div>
        <div>
          <label htmlFor="">Shipping address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Shipping Address"
            id=""
          />
        </div>
      </div>
      <div>
        <label htmlFor="">Credit period</label>
        <input type="number" name="credit" placeholder="0" id="" />
        <span>Days</span>
        <label htmlFor="">Credit limit</label>
        <input type="number" name="credit" placeholder="0" id="" />
        <span>Limit</span>
      </div>
      <div>
        <h3>Contact person details</h3>
        <div>
          <label htmlFor="">Contact person name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="contactperson"
            id=""
          />
          <div>
            <label htmlFor="">Contact person Mobile No.</label>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              name="contactperson"
              id=""
            />{" "}
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="">Party bank account </label>
        <div>add bank account</div>
      </div>
      <div>
        <h3>Custom fields</h3>
      </div>
    </div>
  );
};
export default createPartiesPage;

"use client";

import { OrderSchema, OrderSchemaType } from "./order.schema";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useProducts } from "@/lib/store/useProduct";
import { useClients } from "@/lib/store/useClientMangement";
import { useEffect, useMemo } from "react";
import Select, { SingleValue } from "react-select";

export function OrderForm({
  initialData,
  isLoading,
  onSubmit,
}: {
  onSubmit: (data: OrderSchemaType) => void;
  initialData?: OrderSchemaType;
  isLoading?: boolean;
}) {
  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSchemaType>({
    resolver: zodResolver(OrderSchema) as any,
    defaultValues: initialData
      ? {
          ...initialData,
          orderDate:
            new Date(initialData.orderDate) || initialData.orderDate,
          expectedDeliveryDate:
            new Date(initialData.expectedDeliveryDate) ||
            initialData.expectedDeliveryDate,
        }
      : {},
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const router = useRouter();
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts();
  const {
    data: clients,
    isLoading: clientsLoading,
    isError: clientsError,
  } = useClients();

  const clientOptions = useMemo(
    () =>
      clients?.map((client) => ({
        value: client.id,
        label: client.name,
      })),
    [clients],
  );

  const productOptions = useMemo(
    () =>
      products?.map((product) => ({
        value: product.id,
        label: product.name,
      })),
    [products],
  );

  // ─── Shared style tokens ───────────────────────────────────────────
  const inputClass =
    "w-full border border-(--border) bg-(--surface-2) text-(--text-primary) p-2 rounded placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const labelClass =
    "block text-(--text-primary) text-sm font-semibold mb-1";
  const errorClass = "text-(--error) text-sm mt-1";
  const sectionHeading =
    "text-(--text-primary) text-base font-semibold mb-3 pb-1 border-b border-(--border)";

  return (
    <form
      onSubmit={handleSubmit((data: any) => onSubmit(data))}
      className="w-full space-y-6 rounded-xl bg-(--surface) p-6 shadow"
    >
      {/* ── Client ─────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Order Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Client *</label>
            <Controller
              name="clientId"
              control={control}
              render={({ field }) => (
                <Select
                  instanceId="client-select"
                  options={clientOptions}
                  placeholder="Select client..."
                  isSearchable
                  className="text-black"
                  value={
                    (clientOptions ?? []).find(
                      (opt) => opt.value === field.value,
                    ) || null
                  }
                  onChange={(option: SingleValue<any>) =>
                    field.onChange(option?.value)
                  }
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.clientId && (
              <p className={errorClass}>{errors.clientId.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="orderNumber" className={labelClass}>
              Order Number *
            </label>
            <input
              id="orderNumber"
              type="text"
              {...register("orderNumber")}
              className={inputClass}
              placeholder="e.g. ORD-0001"
            />
            {errors.orderNumber && (
              <p className={errorClass}>{errors.orderNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="orderDate" className={labelClass}>
              Order Date *
            </label>
            <input
              id="orderDate"
              type="date"
              {...register("orderDate", { valueAsDate: true })}
              className={inputClass}
            />
            {errors.orderDate && (
              <p className={errorClass}>{errors.orderDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="expectedDeliveryDate" className={labelClass}>
              Expected Delivery Date
            </label>
            <input
              id="expectedDeliveryDate"
              type="date"
              {...register("expectedDeliveryDate", { valueAsDate: true })}
              className={inputClass}
            />
            {errors.expectedDeliveryDate && (
              <p className={errorClass}>
                {errors.expectedDeliveryDate.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <select id="status" {...register("status")} className={inputClass}>
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            {errors.status && (
              <p className={errorClass}>{errors.status.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="priority" className={labelClass}>
              Priority
            </label>
            <select
              id="priority"
              {...register("priority")}
              className={inputClass}
            >
              <option value="">Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            {errors.priority && (
              <p className={errorClass}>{errors.priority.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Order Items ─────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Order Items</h2>
        <div className="space-y-3">
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg border border-(--border) bg-(--surface-3) p-4 space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className={labelClass}>Product *</label>
                  <Controller
                    name={`items.${index}.productId`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={productOptions}
                        className="text-black"
                        placeholder="Select product..."
                        value={
                          productOptions?.find(
                            (opt) => opt.value === field.value,
                          ) || null
                        }
                        onChange={(option) => {
                          field.onChange(option?.value);
                          const selectedProduct = products?.find(
                            (p) => p.id === option?.value,
                          );
                          if (selectedProduct) {
                            setValue(
                              `items.${index}.unitPrice`,
                              selectedProduct.price,
                            );
                          }
                        }}
                      />
                    )}
                  />
                  {errors.items?.[index]?.productId && (
                    <p className={errorClass}>
                      {errors.items[index]?.productId?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Quantity *</label>
                  <input
                    type="number"
                    {...register(`items.${index}.quantity`, {
                      valueAsNumber: true,
                    })}
                    className={inputClass}
                    placeholder="Qty"
                  />
                  {errors.items?.[index]?.quantity && (
                    <p className={errorClass}>
                      {errors.items[index]?.quantity?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Unit Price *</label>
                  <input
                    type="number"
                    {...register(`items.${index}.unitPrice`, {
                      valueAsNumber: true,
                    })}
                    className={inputClass}
                    placeholder="0.00"
                  />
                  {errors.items?.[index]?.unitPrice && (
                    <p className={errorClass}>
                      {errors.items[index]?.unitPrice?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-3 py-1.5 rounded text-sm font-medium bg-(--error-bg) text-(--error) hover:opacity-80 transition-opacity cursor-pointer"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              append({ productId: "", quantity: 1, unitPrice: 0 })
            }
            className="w-full py-2 rounded border-2 border-dashed border-(--border-strong) text-(--text-secondary) text-sm font-medium hover:border-(--primary) hover:text-(--primary) transition-colors cursor-pointer"
          >
            + Add Item
          </button>
        </div>
      </div>

      {/* ── Shipping ────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="shippingAddress" className={labelClass}>
              Shipping Address
            </label>
            <input
              id="shippingAddress"
              type="text"
              {...register("shippingAddress")}
              className={inputClass}
              placeholder="Street address"
            />
            {errors.shippingAddress && (
              <p className={errorClass}>{errors.shippingAddress.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingCity" className={labelClass}>
              City
            </label>
            <input
              id="shippingCity"
              type="text"
              {...register("shippingCity")}
              className={inputClass}
              placeholder="City"
            />
            {errors.shippingCity && (
              <p className={errorClass}>{errors.shippingCity.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingState" className={labelClass}>
              State
            </label>
            <input
              id="shippingState"
              type="text"
              {...register("shippingState")}
              className={inputClass}
              placeholder="State"
            />
            {errors.shippingState && (
              <p className={errorClass}>{errors.shippingState.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingPincode" className={labelClass}>
              Pincode
            </label>
            <input
              id="shippingPincode"
              type="text"
              {...register("shippingPincode")}
              className={inputClass}
              placeholder="Pincode"
            />
            {errors.shippingPincode && (
              <p className={errorClass}>{errors.shippingPincode.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingCountry" className={labelClass}>
              Country
            </label>
            <input
              id="shippingCountry"
              type="text"
              {...register("shippingCountry")}
              className={inputClass}
              placeholder="Country"
            />
            {errors.shippingCountry && (
              <p className={errorClass}>{errors.shippingCountry.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingContact" className={labelClass}>
              Contact Name
            </label>
            <input
              id="shippingContact"
              type="text"
              {...register("shippingContact")}
              className={inputClass}
              placeholder="Contact name"
            />
            {errors.shippingContact && (
              <p className={errorClass}>{errors.shippingContact.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingPhone" className={labelClass}>
              Alternative Contact
            </label>
            <input
              id="shippingPhone"
              type="text"
              {...register("shippingPhone")}
              className={inputClass}
              placeholder="Phone number"
            />
            {errors.shippingPhone && (
              <p className={errorClass}>{errors.shippingPhone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingMethod" className={labelClass}>
              Shipping Method
            </label>
            <input
              id="shippingMethod"
              type="text"
              {...register("shippingMethod")}
              className={inputClass}
              placeholder="e.g. Standard, Express"
            />
            {errors.shippingMethod && (
              <p className={errorClass}>{errors.shippingMethod.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Billing & Payment ───────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Billing & Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="billingAddress" className={labelClass}>
              Billing Address
            </label>
            <input
              id="billingAddress"
              type="text"
              {...register("billingAddress")}
              className={inputClass}
              placeholder="Billing address"
            />
            {errors.billingAddress && (
              <p className={errorClass}>{errors.billingAddress.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="paymentMethod" className={labelClass}>
              Payment Method
            </label>
            <input
              id="paymentMethod"
              type="text"
              {...register("paymentMethod")}
              className={inputClass}
              placeholder="e.g. Cash, Bank Transfer"
            />
            {errors.paymentMethod && (
              <p className={errorClass}>{errors.paymentMethod.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="paymentStatus" className={labelClass}>
              Payment Status
            </label>
            <input
              id="paymentStatus"
              type="text"
              {...register("paymentStatus")}
              className={inputClass}
              placeholder="e.g. Paid, Pending"
            />
            {errors.paymentStatus && (
              <p className={errorClass}>{errors.paymentStatus.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="currency" className={labelClass}>
              Currency
            </label>
            <input
              id="currency"
              type="text"
              {...register("currency")}
              className={inputClass}
              placeholder="e.g. INR, USD"
            />
            {errors.currency && (
              <p className={errorClass}>{errors.currency.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Totals ──────────────────────────────────────────── */}
      <div>
        <h2 className={sectionHeading}>Totals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="subTotal" className={labelClass}>
              Subtotal
            </label>
            <input
              id="subTotal"
              type="number"
              {...register("subTotal", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.subTotal && (
              <p className={errorClass}>{errors.subTotal.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="totalTax" className={labelClass}>
              Total Tax
            </label>
            <input
              id="totalTax"
              type="number"
              {...register("totalTax", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.totalTax && (
              <p className={errorClass}>{errors.totalTax.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="totalDiscount" className={labelClass}>
              Total Discount
            </label>
            <input
              id="totalDiscount"
              type="number"
              {...register("totalDiscount", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.totalDiscount && (
              <p className={errorClass}>{errors.totalDiscount.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="totalAmount" className={labelClass}>
              Total Amount
            </label>
            <input
              id="totalAmount"
              type="number"
              {...register("totalAmount", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.totalAmount && (
              <p className={errorClass}>{errors.totalAmount.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingCost" className={labelClass}>
              Shipping Cost
            </label>
            <input
              id="shippingCost"
              type="number"
              {...register("shippingCost", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.shippingCost && (
              <p className={errorClass}>{errors.shippingCost.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="grandTotal" className={labelClass}>
              Grand Total
            </label>
            <input
              id="grandTotal"
              type="number"
              {...register("grandTotal", { valueAsNumber: true })}
              className={inputClass}
              placeholder="0.00"
            />
            {errors.grandTotal && (
              <p className={errorClass}>{errors.grandTotal.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Notes ───────────────────────────────────────────── */}
      <div>
        <label htmlFor="notes" className={labelClass}>
          Notes
        </label>
        <input
          id="notes"
          type="text"
          {...register("notes")}
          className={inputClass}
          placeholder="Any additional notes..."
        />
        {errors.notes && (
          <p className={errorClass}>{errors.notes.message}</p>
        )}
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="flex justify-end space-x-2 pt-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 rounded font-medium text-sm border border-(--border) bg-(--btn-secondary) text-(--btn-secondary-text) hover:opacity-80 transition-opacity cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded font-medium text-sm bg-(--btn-primary) text-(--btn-text-white) hover:bg-(--btn-primary-hover) disabled:opacity-50 transition-colors cursor-pointer"
        >
          {isLoading ? "Saving..." : initialData ? "Update Order" : "Create Order"}
        </button>
      </div>
    </form>
  );
}

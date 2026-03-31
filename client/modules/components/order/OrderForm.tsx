"use client";

import { OrderSchema, OrderSchemaType } from "./order.schema";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useProducts } from "@/modules/routes/useProduct";
import { useClients } from "@/modules/routes/useClientMangement";
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
            new Date(initialData.orderDate) ||
            // .toISOString().split("T")[0]
            initialData.orderDate,
          expectedDeliveryDate:
            new Date(initialData.expectedDeliveryDate) ||
            //   .toISOString()
            //   .split("T")[0]
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
      clients?.map((client) => {
        return {
          value: client.id,
          label: client.name,
        };
      }),
    [clients],
  );
  const productOptions = useMemo(
    () =>
      products?.map((product) => {
        return {
          value: product.id,
          label: product.name,
        };
      }),
    [products],
  );

  return (
    <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
      <div>
        <label htmlFor="clientId">Client</label>

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
              onChange={
                (option: SingleValue<any>) => field.onChange(option?.value) // keep as string
              }
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.clientId && <p>{errors.clientId.message}</p>}
      </div>
      <div className="bg-green-700">
        <h3>Order Items</h3>
        {fields.map((item, index) => (
          <div key={item.id} className="border p-3 mb-3">
            {/* Product Select */}
            <label>Product</label>
            <Controller
              name={`items.${index}.productId`}
              control={control}
              render={({ field }) => (
                <Select
                  options={productOptions}
                  className="text-black"
                  value={
                    productOptions?.find((opt) => opt.value === field.value) ||
                    null
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
              <p>{errors.items[index]?.productId?.message}</p>
            )}

            {/* Quantity */}
            <label>Quantity</label>
            <input
              type="number"
              {...register(`items.${index}.quantity`, { valueAsNumber: true })}
            />
            {errors.items?.[index]?.quantity && (
              <p>{errors.items[index]?.quantity?.message}</p>
            )}

            {/* Unit Price */}
            <label>Unit Price</label>
            <input
              type="number"
              {...register(`items.${index}.unitPrice`, { valueAsNumber: true })}
            />
            {errors.items?.[index]?.unitPrice && (
              <p>{errors.items[index]?.unitPrice?.message}</p>
            )}

            <button type="button" onClick={() => remove(index)}>
              Remove Item
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              productId: "",
              quantity: 1,
              unitPrice: 0,
            })
          }
        >
          Add Item
        </button>
      </div>

      <div>
        <label htmlFor="orderNumber">Order Number</label>
        <input type="text" {...register("orderNumber")} />
        {errors.orderNumber && <p>{errors.orderNumber.message}</p>}
      </div>
      <div>
        <label htmlFor="orderDate">Order Date</label>
        <input type="date" {...register("orderDate", { valueAsDate: true })} />
        {errors.orderDate && <p>{errors.orderDate.message}</p>}
      </div>
      <div>
        <label htmlFor="expectedDeliveryDate">Expected Delivery Date</label>
        <input
          type="date"
          {...register("expectedDeliveryDate", { valueAsDate: true })}
        />
        {errors.expectedDeliveryDate && (
          <p>{errors.expectedDeliveryDate.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select {...register("status")} className="text-black bg-white">
          <option value="">Select status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        {errors.status && <p>{errors.status.message}</p>}
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select {...register("priority")} className="bg-white text-black">
          <option value="">Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>

      <div>
        <label htmlFor="shippingAddress">Shipping Address</label>
        <input type="text" {...register("shippingAddress")} />
        {errors.shippingAddress && <p>{errors.shippingAddress.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingCity">Shipping City</label>
        <input type="text" {...register("shippingCity")} />
        {errors.shippingCity && <p>{errors.shippingCity.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingState">Shipping State</label>
        <input type="text" {...register("shippingState")} />
        {errors.shippingState && <p>{errors.shippingState.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingPincode">Shipping Pincode</label>
        <input type="text" {...register("shippingPincode")} />
        {errors.shippingPincode && <p>{errors.shippingPincode.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingCountry">Shipping Country</label>
        <input type="text" {...register("shippingCountry")} />
        {errors.shippingCountry && <p>{errors.shippingCountry.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingContact">Shipping Contact</label>
        <input type="text" {...register("shippingContact")} />
        {errors.shippingContact && <p>{errors.shippingContact.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingPhone">Shipping AlterNative Contact</label>
        <input type="text" {...register("shippingPhone")} />
        {errors.shippingPhone && <p>{errors.shippingPhone.message}</p>}
      </div>
      <div>
        <label htmlFor="billingAddress">Billing Address</label>
        <input type="text" {...register("billingAddress")} />
        {errors.billingAddress && <p>{errors.billingAddress.message}</p>}
      </div>
      <div>
        <label htmlFor="shippingMethod">Shipping Method</label>
        <input type="text" {...register("shippingMethod")} />
        {errors.shippingMethod && <p>{errors.shippingMethod.message}</p>}
      </div>
      <div>
        <label htmlFor="paymentMethod">Payment Method</label>
        <input type="text" {...register("paymentMethod")} />
        {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
      </div>
      <div>
        <label htmlFor="paymentStatus">Payment Status</label>
        <input type="text" {...register("paymentStatus")} />
        {errors.paymentStatus && (
          <p className="text-red-700">{errors.paymentStatus.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <input type="text" {...register("notes")} />
        {errors.notes && <p className="text-red-700">{errors.notes.message}</p>}
      </div>
      <div>
        <label htmlFor="subTotal" className="mx-2">
          Subtotal
        </label>
        <input
          type="number"
          {...register("subTotal", { valueAsNumber: true })}
        />
        {errors.subTotal && (
          <p className="text-red-700">{errors.subTotal.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="totalTax">Total Tax</label>
        <input
          type="number"
          {...register("totalTax", { valueAsNumber: true })}
        />
        {errors.totalTax && (
          <p className="text-red-700">{errors.totalTax.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="totalAmount">Total Amount</label>
        <input
          type="number"
          {...register("totalAmount", { valueAsNumber: true })}
        />
        {errors.totalAmount && (
          <p className="text-red-700">{errors.totalAmount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="totalDiscount">Total Discount</label>
        <input
          type="number"
          {...register("totalDiscount", { valueAsNumber: true })}
        />
        {errors.totalDiscount && (
          <p className="text-red-700">{errors.totalDiscount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="shippingCost">Shipping Cost</label>
        <input
          type="number"
          {...register("shippingCost", { valueAsNumber: true })}
        />
        {errors.shippingCost && (
          <p className="text-red-700">{errors.shippingCost.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="currency">Currency</label>
        <input type="text" {...register("currency")} />
        {errors.currency && (
          <p className="text-red-700">{errors.currency.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="grandTotal">Grand Total</label>
        <input
          type="number"
          {...register("grandTotal", { valueAsNumber: true })}
        />
        {errors.grandTotal && (
          <p className="text-red-700">{errors.grandTotal.message}</p>
        )}
      </div>

      <button type="button" onClick={() => router.back()}>
        cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

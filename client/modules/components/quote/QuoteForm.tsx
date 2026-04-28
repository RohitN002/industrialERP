"use client";

import { useProducts } from "@/lib/store/useProduct";
import { ErrorState, LoadingState } from "../shared";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { quoteSchema } from "./quote.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm({
  initialData,
  onSubmit,
  isLoading,
  clientId,
}: {
  initialData?: any;
  onSubmit: (data: any) => void;
  isLoading: boolean;
  clientId?: string;
}) {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsIsError,
  } = useProducts();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quoteSchema) as any,
    defaultValues: initialData
      ? {
          clientId: clientId,
          quoteName: initialData.quoteName,
          expiryDate: initialData.expiryDate,
          currency: initialData.currency,
          description: initialData.description,
          terms: initialData.terms,
          items: initialData.items,
        }
      : {},
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
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
  console.log("errors", errors);
  const router = useRouter();
  return (
    <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
      {productsLoading && <LoadingState />}
      {productsIsError && <ErrorState />}
      <div>
        <label htmlFor="quoteName">Quote Name</label>
        <input type="text" {...register("quoteName")} />
        {/* {errors.quoteName && (
          <p className="text-red-500 text-sm">{errors.quoteName.message}</p>
        )} */}
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="date" {...register("expiryDate")} />
        {/* {errors.expiryDate && (
          <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
        )} */}
      </div>
      <div>
        <label htmlFor="currency">Currency</label>
        <input type="text" {...register("currency")} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" {...register("description")} />
      </div>
      <div>
        <label htmlFor="terms">Terms</label>
        <input type="text" {...register("terms")} />
      </div>
      <div className="bg-green-700">
        <div className="flex justify-between items-center">
          <h3>Order Items</h3>
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
            {/* {errors.items?.[index]?.productId && (
                <p>{errors.items[index]?.productId?.message}</p>
              )} */}

            {/* Quantity */}
            <label>Quantity</label>
            <input
              type="number"
              {...register(`items.${index}.quantity`, {
                valueAsNumber: true,
              })}
            />
            {/* {errors.items?.[index]?.quantity && (
                <p>{errors.items[index]?.quantity?.message}</p>
              )} */}

            {/* Unit Price */}
            <label>Unit Price</label>
            <input
              type="number"
              {...register(`items.${index}.unitPrice`, {
                valueAsNumber: true,
              })}
            />
            <br />
            <label htmlFor="description">Description</label>
            <input type="text" {...register(`items.${index}.description`)} />
            {/* {errors.items?.[index]?.unitPrice && (
                <p>{errors.items[index]?.unitPrice?.message}</p>
              )} */}

            <button type="button" onClick={() => remove(index)}>
              Remove Item
            </button>
          </div>
        ))}

        {/* <button
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
        </button> */}
      </div>
      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
      <button type="submit">Create Quote</button>
    </form>
  );
}

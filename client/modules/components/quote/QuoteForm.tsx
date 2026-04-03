"use client";

import { useProducts } from "@/lib/store/useProduct";
import { ErrorState, LoadingState } from "../shared";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { quoteSchema } from "./quote.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useMemo } from "react";

export default function QuoteForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  isLoading: boolean;
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {productsLoading && <LoadingState />}
      {productsIsError && <ErrorState />}
      <div>
        <input type="date" {...register("expiryDate")} />
        <div>
          <label htmlFor="currency">Currency</label>
          <input type="text" {...register("currency")} />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input type="text" {...register("notes")} />
        </div>
        <div>
          <label htmlFor="terms">Terms</label>
          <input type="text" {...register("terms")} />
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
              {/* {errors.items?.[index]?.unitPrice && (
                <p>{errors.items[index]?.unitPrice?.message}</p>
              )} */}

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
      </div>
      <h1>Quote Form</h1>
    </form>
  );
}

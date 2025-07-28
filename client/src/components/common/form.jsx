import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  const [showPassword, setShowPassword] = useState({});

  function renderInputsByComponentType(getControlItem) {
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input": {
        const isPassword = getControlItem.type === "password";
        const inputType = isPassword
          ? showPassword[getControlItem.name]
            ? "text"
            : "password"
          : getControlItem.type || "text";

        return (
          <div className="relative">
            <Input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={inputType}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
            {isPassword && (
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    [getControlItem.name]: !prev[getControlItem.name],
                  }))
                }
                className="absolute right-3 top-2/3 -translate-y-1/2 text-xs text-emerald-600 hover:underline"
              >
                {showPassword[getControlItem.name] ? "Hide" : "Show"}
              </button>
            )}
          </div>
        );
      }

      case "select":
        return (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
            value={value}
          >
            <SelectTrigger className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 transition duration-300">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
            value={value}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

      default:
        return (
          <Input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type || "text"}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fade-up">
      <div className="flex flex-col gap-5">
        {formControls.map((getControlItem, index) => (
          <div
            className={`grid w-full gap-2 animate-fade-in`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
            key={getControlItem.name}
          >
            <label className="text-sm font-semibold text-gray-700">
              {getControlItem.label}
            </label>
            {renderInputsByComponentType(getControlItem)}
          </div>
        ))}
      </div>
      <Button
        type="submit"
        className="mt-6 w-full rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-md animate-fade-in delay-300"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;

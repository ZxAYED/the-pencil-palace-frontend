/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ZButton from "../../utils/ZButton";

import ZForm from "./../../utils/ZForm";

const SearchAndSortFields = ({ setArgs }: { setArgs: (args: any) => void }) => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let filter: any[] = [];

    if (data.searchTerm) {
      filter.push({ name: "searchTerm", value: data.searchTerm });
    }

    if (selectedCategories.length) {
      filter.push({ name: "categories", value: selectedCategories });
    }

    if (data.priceRange) {
      filter.push({ name: "priceRange", value: data.priceRange });
    }

    if (data.sortOrder) {
      filter.push({ name: "sortOrder", value: data.sortOrder });
    }

    setArgs(filter);
  };

  const categories = [
    { value: "Office Supplies", label: "Office Supplies" },
    { value: "Art Supplies", label: "Art Supplies" },
    { value: "Technology", label: "Technology" },
    { value: "Educational", label: "Educational" },
    { value: "Writing", label: "Writing" },
  ];

  const prices = [
    { value: "below-1000", label: "Below ৳ 1000" },
    { value: "1000-5000", label: "৳ 1000 - ৳ 5000" },
    { value: "5000-10000", label: "৳ 5000 - ৳ 10000" },
    { value: "above-10000", label: "Above ৳ 10000" },
  ];

  const handleCategoryChange = (event: any) => {
    const { value } = event.target;
    setSelectedCategories(Array.isArray(value) ? value : value.split(","));
  };
  return (
    <Box className="p-4 space-y-4 rounded-lg bg-[#fff3e0] flex flex-col">
      <ZForm onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6">Search Products</Typography>
        <TextField
          label="Search by name, brand, category, or description"
          {...register("searchTerm")}
          fullWidth
          variant="outlined"
        />

        <Typography variant="h6" className="!mt-[16px]">
          Select Categories
        </Typography>

        <FormControl fullWidth>
          <InputLabel>Categories</InputLabel>
          <Select
            multiple
            value={selectedCategories}
            onChange={handleCategoryChange}
            renderValue={(selected) => (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Stack>
            )}
            label="Categories"
          >
            {categories.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="h6" className="!mt-[16px]">
          Select Price Range
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Price Range</InputLabel>
          <Select {...register("priceRange")} label="Price Range">
            {prices.map((price) => (
              <MenuItem key={price.value} value={price.value}>
                {price.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="h6" className="!mt-[16px]">
          Sort By Price
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Sort Order</InputLabel>
          <Select {...register("sortOrder")} label="Sort Order">
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <ZButton fullWidth={true} name="Apply Filters"></ZButton>
        </Box>
      </ZForm>
    </Box>
  );
};

export default SearchAndSortFields;

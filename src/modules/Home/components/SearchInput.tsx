import { TextField } from "@mui/material";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const SearchInput = ({ value, onChange, disabled }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Regex para permitir solo letras (incluyendo acentos y ñ) y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    
    if (regex.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Ingrese el nombre de la ciudad..."
      value={value}
      onChange={handleChange}
      label='ciudad'
      disabled={disabled}
      inputProps={{
        title: "Solo se permiten letras y espacios"
      }}
    />
  );
}; 
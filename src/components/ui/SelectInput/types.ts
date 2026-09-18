export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

export interface SelectInputProps {
  options: SelectOption[];
  value: SelectOption;
  onChange: (option: SelectOption) => void;
}

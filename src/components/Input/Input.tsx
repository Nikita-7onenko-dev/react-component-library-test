import React, { useState } from 'react';

type Props<T = string> = {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  placeholder?: string;
  value?: T;
  onValueChange?: (value: T) => void; 
}

export default function Input ({ 
  type = 'text', 
  clearable = false, 
  placeholder,
  value: propValue,
  onValueChange
}: Props): React.JSX.Element {
  const [value, setValue] = useState(propValue ?? "");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const clearInput = () => {
    setValue("");
    onValueChange?.("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue); 
    onValueChange?.(newValue);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Type some"}
      />
      {type === 'password' && (
        <button onClick={togglePassword}>{showPassword ? 'Hide' : 'Show'}</button>
      )}
      {clearable && <button onClick={clearInput}>X</button>}
    </div>
  );
};

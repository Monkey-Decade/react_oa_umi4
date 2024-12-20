import React from 'react';

import type { InputProps } from 'antd';
import { ConfigProvider, Input } from 'antd';
import './index.css';
import styles from './index.module.css';

interface AntInputProps extends Omit<InputProps, 'onChange'> {
  label?: string;
  onChange?: (value: string) => void;
}
const AntInput: React.FC<AntInputProps> = ({ label, onChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.inputItem}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <ConfigProvider
        theme={{
          token: {
            colorTextPlaceholder: '#999999',
            colorBorder: '#E7E7E7',
            colorText: '#1E1E1E',
          },
          components: {
            Input: {
              activeBorderColor: '#0052DA',
              hoverBorderColor: '#0052DA',
            },
          },
        }}
      >
        <Input {...props} rootClassName="inputRoot" onChange={handleChange} />
      </ConfigProvider>
    </div>
  );
};

export default AntInput;

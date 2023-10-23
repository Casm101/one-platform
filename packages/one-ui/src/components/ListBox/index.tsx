import { useState } from 'react';
import './styles.scss';

interface ListBoxTab {
  label: string,
  description?: string,
  icon?: React.ReactNode
  color?: string;
  disabled?: boolean;
}

interface ListBoxProps {
  tabs: ListBoxTab[];
}

/**
 * User ListBox component
 */
export const ListBox = ({
  tabs
}: ListBoxProps) => {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="listbox-styled">
      {tabs.map((tab, idx) => {

        const { label, description, icon, color } = tab;
        const isSelected = idx === selectedTab ? '--selected' : '';
        const variantColor = color ?
        {
          color: color,
          //backgroundColor: `${color}99`
        } : undefined; 

        return (
          <button
            className={["listbox-tab", isSelected].join(' ')}
            onClick={() => setSelectedTab(idx)}
            style={variantColor}
            key={idx}
          >
            {label}
          </button>
        )
      })}
    </div>
  );
};

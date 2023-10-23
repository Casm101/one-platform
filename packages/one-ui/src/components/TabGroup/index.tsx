import { useState } from 'react';
import './styles.scss';

interface TabGroupProps {
  tabs: string[];
}

/**
 * User TabGroup component
 */
export const TabGroup = ({
  tabs
}: TabGroupProps) => {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabgroup-styled">
      {tabs.map((tab, idx) => {

        const isSelected = idx === selectedTab ? '--selected' : '';

        return (
          <button
            className={["tabgroup-tab", isSelected].join(' ')}
            onClick={() => setSelectedTab(idx)}
            key={idx}
          >
            {tab}
          </button>
        )
      })}
    </div>
  );
};

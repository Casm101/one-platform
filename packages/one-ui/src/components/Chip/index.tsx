import './styles.scss';

export interface ChipProps {
  /**
   * What is the label text?
   */
  label: string;
   /**
   * How large should the Input be?
   */
  size?: string;
  /**
   * Set a custom colour for the chip.
   */
  color?: string;
}

/**
 * User Chip component
 */
export const Chip = ({
  label,
  size = 'medium',
  color
}: ChipProps) => {

  return (
    <span
      className={["chip-styled", `--${size}`].join(' ')}
      style={{ color: color }}
    >
      {label}
    </span>
  );
};

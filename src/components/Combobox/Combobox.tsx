import clsx from "clsx";
import { useCombobox } from "downshift";

import { IconButton } from '../IconButton';
import { Input } from '../Input';

import { ComboboxProps } from '../../../types';

import styles from "./Combobox.module.sass";

const ChevronDownIcon = ({ ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

/**
 * Combobox component for selecting items from a dropdown list.
 * @param {ComboboxProps} props The props for the Combobox component.
 * @returns {JSX.Element} The Combobox component.
 */

function Combobox({
  elevation = 1,
  items = [],
  maxItems = 5,
  value,
  onInputChange,
  onSelect,
  ...inputProps
}: ComboboxProps) {
  const limitedItems = items.slice(0, maxItems);

  const {
    isOpen,
    highlightedIndex,
    getInputProps,
    getItemProps,
    getMenuProps,
    selectItem,
    setInputValue,
    openMenu,
  } = useCombobox({
    items: limitedItems,
    inputValue: value,
    itemToString: (item) => {
      return item?.value.toString() ?? "";
    },
    onInputValueChange: (changes) => {
      onInputChange?.(changes.inputValue ?? "");
    },
    onSelectedItemChange: (changes) => {
      onSelect?.(changes.selectedItem);
    },
  });

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    inputProps.onKeyDown?.(event);

    if (event.key === "Enter") {
      selectItem({
        value: event.currentTarget.value,
      });
      setInputValue("");
    }
  };

  return (
    <div className={styles.root}>
      <Input
        endAdornment={
          <IconButton
            className={styles.chevronIconButton}
            icon={ChevronDownIcon}
            onClick={openMenu}
          />
        }
        {...getInputProps({
          ...inputProps,
          onKeyDown: handleInputKeyDown,
        })}
      />
      <div
        className={clsx(styles.suggestionMenu, {
          [styles[`elevation${elevation}`]]: elevation && elevation > 0,
          [styles.openSuggestionMenu]: isOpen && items.length > 0,
        })}
        {...getMenuProps()}
      >
        {isOpen && (
          <>
            {limitedItems.map((item, index) => (
              <div
                key={item.key ?? index}
                className={clsx(styles.suggestion, {
                  [styles.highlightedSuggestion]: highlightedIndex === index,
                })}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                {item.value}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Combobox;

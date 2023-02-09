//Generic Props
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { first: string; last: string; id: number }>({
  // export const List = <T extends string | number>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.first}
            {item.last}
          </div>
        );
      })}
    </div>
  );
};

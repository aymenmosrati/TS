import { Name } from "../types/Person.types";
// type array of objects
type PersonListProps = {
  names: Name[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
};

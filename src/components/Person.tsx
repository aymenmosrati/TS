import { PresonProps } from "../types/Person.types";
export const Person = (props: PresonProps) => {
  return (
    <div>
      {props.name.first}
      {props.name.last}
    </div>
  );
};
 
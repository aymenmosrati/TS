// simple type
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet1 = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome1 ${props.name} ! You have  ${messageCount} unread messages`
          : `Welcom Geust `}
      </h2>
    </div>
  );
};

export const Greet2 = () => {
  return (
    <div>
      <h2>Welcome2222 </h2>
    </div>
  );
};

export const Greet3 = () => {
  return (
    <div>
      <h2>Welcome3333 </h2>
    </div>
  );
};

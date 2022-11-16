type PersonListProps = {
  names: { first: string; last: string }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.names.map((name, index) => (
        <li key={index}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
};

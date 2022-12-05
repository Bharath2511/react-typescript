import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log("clicked")}>
      Bharath
    </ChildAsFC>
  );
};

export default Parent;

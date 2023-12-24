interface EmployeeProps {
  name: string;
  charge: string;
}
const Employee = ({ charge, name }: EmployeeProps) => {
  return (
    <ul className="">
      <li className="ml-[30px]">{name}</li>
      <li className="ml-[124px]">{charge}</li>
    </ul>
  );
};

export default Employee;

interface EmployeeReqDTO {
  name: string;
  surname: string;
  photo: string;
  office: number;
  birthDate: string;
  salary: number;
};

interface NewEmployeeDTO {
  id: string;
  name: string;
  surname: string;
  photo: string;
  office: number;
  birthDate: string;
  salary: number;
};

interface Employee {
  id: string;
  name: string;
  surname: string;
  photo: string;
  birthDate: string;
  salary: number;
  office: string;
};


export { Employee, EmployeeReqDTO, NewEmployeeDTO };

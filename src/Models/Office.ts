interface NewOfficeDTO {
  type: string;
  description: string;
};

interface Office {
  id: number;
  type: string;
  description: string;
};


export { Office, NewOfficeDTO };

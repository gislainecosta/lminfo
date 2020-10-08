export const initialState = {
  offices: [
    {
      id: '1',
      type: 'Product Owner',
      description: 'Responsável pela entrega do projeto, supervisiona o time de desenvolvedores, pensando sempre na qualidade do código e nas funcionalidades do produto.'
    },
    {
      id: '2',
      type: 'Desenvolvedor Front-end',
      description: 'Responsável pela interface das estruturas web, sempre pensando na experiência do usuário.'
    },
    {
      id: '3',
      type: 'Desenvolvedor Back-end',
      description: 'Responsável pela implementação da regra de negócio e criação/manutenção do banco de dados.'
    }
  ], 
  employees: [
    {
      id: '1',
      name: 'Gislaine',
      surname: 'Costa Pereira',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Desenvolvedor Front-end',
      birthDate: '15/11/1983',
      salary: '3500'
    },
    {
      id: '2',
      name: 'Luciano',
      surname: 'Coelho de Souza',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Desenvolvedor Back-end',
      birthDate: '03/01/1984',
      salary: '5500'
    },
    {
      id: '3',
      name: 'Saxa',
      surname: 'Costa',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Product Owner',
      birthDate: '22/02/1998',
      salary: '7000'
    },
    {
      id: '4',
      name: 'Gislaine',
      surname: 'Costa Pereira',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Desenvolvedor Front-end',
      birthDate: '15/11/1983',
      salary: '3500'
    },
    {
      id: '5',
      name: 'Gislaine',
      surname: 'Costa Pereira',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Desenvolvedor Front-end',
      birthDate: '15/11/1983',
      salary: '3500'
    },
    {
      id: '6',
      name: 'Luciano',
      surname: 'Coelho de Souza',
      photo: 'https://picsum.photos/id/237/200/200',
      office: 'Desenvolvedor Back-end',
      birthDate: '03/01/1984',
      salary: '5500'
    }
  ],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      const employeeList = action.employees
      return { ...state, employees: employeeList };
    case 'GET_OFFICES':
      const officeList = action.offices
      return { ...state, employees: officeList };
    case 'EMPLOYEE':
      const employee = action.employee
      return { ...state, enderecoUser: employee };
    default:
      return state;
  }
};
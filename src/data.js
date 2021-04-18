const employeesData = [
    {
      id: '001DBHX02ABC2',
      name: 'Abigail',
      surname: 'Lonsdale',
      dateOfBirth:'1972-07-12',
      position: 'IT Support Manager',
      phoneNumber: '+1 805 548 0575',
      isDeleted: false,
      inputId: '001DBHX02ABC2'
    },
    {
        id: '002JBHX02AJCC2',
        name: 'Amelia',
        surname: 'Newhall',
        dateOfBirth:'1990-03-24',
        position: 'Software engineer',
        phoneNumber: '+1 650 246 8038',
        isDeleted: false,
        inputId: '002JBHX02AJCC2'
    },
    {
        id: '003TABJC02ABC2', 
        name: 'Anderson',
        surname: 'Pascoe',
        dateOfBirth:'1982-04-02',
        position: 'Information Security Analyst',
        phoneNumber: '+1 213 425 1203',
        isDeleted: false,
        inputId: '003TABJC02ABC2'
    },
    {
        id: '004FEVB5ASIEC2',
        name: 'Ava',
        surname: 'Mapstone',
        dateOfBirth:'1996-01-18',
        position: 'Data Quality Manager',
        phoneNumber: '+1 814 547 0525',
        isDeleted: false,
        inputId: '004FEVB5ASIEC2'
    },
    {
        id: '005FEVB5MNTJ2',
        name: 'Bethany',
        surname: 'Dence',
        dateOfBirth:'1992-02-11',
        position: 'Software Architect',
        phoneNumber: '+1 415 760 8842',
        isDeleted: false,
        inputId: '005FEVB5MNTJ2'
    },
    {
        id: '006FEVB5JJHLA2',
        name: 'Byrne',
        surname: 'Mileham',
        dateOfBirth:'1993-08-19',
        position: 'Application Support Analyst',
        phoneNumber: '+1 561 413 9906',
        isDeleted: false,
        inputId: '006FEVB5JJHLA2'
    },
    {
        id: '007FEVB5RABQ2', 
        name: 'Callum',
        surname: 'Roberts',
        dateOfBirth:'1986-02-10',
        position: 'UI/UX designer',
        phoneNumber: '+1 863 202 4887',
        isDeleted: false,
        inputId: '007FEVB5RABQ2'
    },
    {
        id: '008SJVB5JRUIK2',
        name: 'Charles',
        surname: 'Denver',
        dateOfBirth:'1991-06-18',
        position: 'Front-end developer',
        phoneNumber: '+1 954 560 2468',
        isDeleted: false,
        inputId: '008SJVB5JRUIK2'
    },
    {
        id: '009FEVB5XDJCA2',
        name: 'Connor',
        surname: 'Wright',
        dateOfBirth:'1998-03-01',
        position: 'Back-end developer',
        phoneNumber: '+1 786 521 5805',
        isDeleted: false,
        inputId: '009FEVB5XDJCA2'
    },
    {
        id: '0010DEVB5GTYI2',
       	name: 'Damian',
        surname: 'Robinson',
        dateOfBirth:'1994-07-18',
        position: 'System Architect',
        phoneNumber: '+1 229 602 1740',
        isDeleted: false,
      	inputId: '0010DEVB5GTYI2'
    },
    {
        id: '0011OAAB5GTYI2',
  	    name: 'Daniel',
        surname: 'Hughes',
        dateOfBirth:'1982-04-21',
      	position: 'Data analyst',
      	phoneNumber: '+1 768 428 0682',
      	isDeleted: false,
        inputId: '0011OAAB5GTYI2'
    },
    {
        id: '0012TEB5GDTJQ2',
        name: 'David',
        surname: 'Thompson',
        dateOfBirth:'1988-02-10',
        position: 'Cloud Services Developer',
        phoneNumber: '+1 404 546 2148',
        isDeleted: false,
        inputId: '0012TEB5GDTJQ2'
    },
    {
        id: '0013XCADXGJJA2',
        name: 'Elizabeth',
        surname: 'Lewis',
        dateOfBirth:'1998-12-05',
        position: 'Computer Systems Manager',
        phoneNumber: '+1 781 508 4736',
        isDeleted: false,
        inputId: '0013XCADXGJJA2'
    },
    {
        id: '0014QJHAACXJH2',
        name: 'Emily',
        surname: 'Wood',
        dateOfBirth:'1984-05-17',
        position: 'Help Desk Specialist',
        phoneNumber: '+1 212 427 5615',
        isDeleted: false,
        inputId: '0014QJHAACXJH2'
    },
    {
        id: '0015EELD0AJCD2',
        name: 'Ethan',
        surname: 'Harris',
        dateOfBirth:'1982-08-21',
        position: 'Desktop Support Specialist',
        phoneNumber: '+1 516 547 0143',
        isDeleted: false,
        inputId: '0015EELD0AJCD2'
    },
    {
        id: '0016FEVB5JDDIK2',
        name: 'Evans',
        surname: 'Crowley',
        dateOfBirth:'1986-10-23',
        position: 'Network Architect',
        phoneNumber: '+1 929 574 2982',
        isDeleted: false,
        inputId: '0016FEVB5JDDIK2'
    },
    {
        id: '0017FON0HPLDJ2',
        name: 'Gagnon',
        surname: 'Jackson',
        dateOfBirth:'1990-04-12',
        position: 'Cloud Consultant',
        phoneNumber: '+1 516 842 1293',
        isDeleted: false,
        inputId: '0017FON0HPLDJ2'
    },
    {
        id: '0018YCVXJHGJA2',
        name: 'Gelbero',
        surname: 'Clarke',
        dateOfBirth:'1988-01-14',
        position: 'System administrator',
        phoneNumber: '+1 814 824 3698',
        isDeleted: false,
        inputId: '0018YCVXJHGJA2'
    },
    {
        id: '0019DCRHJJXAA2',
        name: 'George',
        surname: 'Martin',
        dateOfBirth:'1991-05-24',
        position: 'Network Engineer',
        phoneNumber: '+1 628 542 3674',
        isDeleted: false,
        inputId: '0019DCRHJJXAA2'
    },
    {
        id: '0020CCJXDDKJA2',
        name: 'Henry',
        surname: 'Adwell',
        dateOfBirth:'1994-07-26',
        position: 'Technical Support Engineer',
        phoneNumber: '+1 650 542 1478',
        isDeleted: false,
        inputId: '0020CCJXDDKJA2'
    },
    {
        id: '0021FEVB5DEEJ2',
        name: 'Harry',
        surname: 'Barnett',
        dateOfBirth:'1992-03-11',
        position: 'Information Research Scientist',
        phoneNumber: '+1 858 847 5674',
        isDeleted: false,
        inputId: '0021FEVB5DEEJ2'
    },
    {
        id: '0022JBDD2AXJN2',
        name: 'Jake',
        surname: 'Stevens',
        dateOfBirth:'1994-08-20',
        position: 'System Administrator',
        phoneNumber: '+1 917 842 3681',
        isDeleted: false,
        inputId: '0022JBDD2AXJN2'
    },
    {
        id: '0023QJBB0HQJC2',
        name: 'James',
        surname: 'Pelfrey',
        dateOfBirth:'1986-07-23',
        position: 'Front-end developer',
        phoneNumber: '+1 425 965 4123',
        isDeleted: false,
        inputId: '0023QJBB0HQJC2'
    },
    {
        id: '0024AAEHJJDCC2',
        name: 'Joe',
        surname: 'Rundell',
        dateOfBirth:'1984-10-21',
        position: 'Computer Network Architect',
        phoneNumber: '+1 718 846 2354',
        isDeleted: false,
        inputId: '0024AAEHJJDCC2'
    },
    {
        id: '0025UJJSAADKC2',
        name: 'Lauren',
        surname: 'Odgers',
        dateOfBirth:'1988-01-30',
        position: 'UI/UX Designer',
        phoneNumber: '+1 646 854 2126',
        isDeleted: false,
        inputId: '0025UJJSAADKC2'
    },
    {
        id: '0026PADDJCADJ2',
        name: 'Liam',
        surname: 'Northington',
        dateOfBirth:'1992-04-19',
        position: 'Cloud System Engineer',
        phoneNumber: '+1 917 854 7562',
        isDeleted: false,
        inputId: '0026PADDJCADJ2'
    },
    {
        id: '0027KNHDDJXQQ2',
        name: 'Martin',
        surname: 'Stockbridge',
        dateOfBirth:'1996-10-27',
        position: 'IT Analyst',
        phoneNumber: '+1 805 743 2586',
        isDeleted: false,
        inputId: '0027KNHDDJXQQ2'
    },
    {
        id: '0028QAJJCDBJD2',
        name: 'Oliver',
        surname: 'Rustin',
        dateOfBirth:'1984-06-20',
        position: 'Network Administrator',
        phoneNumber: '+1 505 418 7562',
        isDeleted: false,
        inputId: '0028QAJJCDBJD2'
    },
    {
        id: '0029MJUDCAJAA2',
        name: 'Tracy',
        surname: 'Ludington',
        dateOfBirth:'1990-07-28',
        position: 'Computer Systems Analyst',
        phoneNumber: '+1 814 457 1236',
        isDeleted: false,
        inputId: '0029MJUDCAJAA2'
    },
    {
        id: '0030DDLKMXCJJ2',
        name: 'William',
        surname: 'Mortimore',
        dateOfBirth:'1993-03-12',
        position: 'IT Coordinator',
        phoneNumber: '+1 619 965 8458',
        isDeleted: false,
        inputId: '0030DDLKMXCJJ2'
    },
  ];

  export default employeesData
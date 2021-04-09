const employeesData = [
    {
      id: '001DBHX02ABC2',
      name: 'Anar',
      surname: 'Qabiloğlu',
      dateOfBirth:'1972-07-12',
      position: 'IT Support Manager',
      phoneNumber: '+994512548575',
      isDeleted: false,
      inputId: '001DBHX02ABC2'
    },
    {
        id: '002JBHX02AJCC2',
        name: 'Aytac',
        surname: 'Əliqızı',
        dateOfBirth:'1990-03-24',
        position: 'Software engineer',
        phoneNumber: '+994705246838',
        isDeleted: false,
        inputId: '002JBHX02AJCC2'
    },
    {
        id: '003TABJC02ABC2', 
        name: 'Eldar',
        surname: 'Cavadov',
        dateOfBirth:'1982-04-02',
        position: 'Information Security Analyst',
        phoneNumber: '+994558425123',
        isDeleted: false,
        inputId: '003TABJC02ABC2'
    },
    {
        id: '004FEVB5ASIEC2',
        name: 'Günel',
        surname: 'Hacıyeva',
        dateOfBirth:'1996-01-18',
        position: 'Data Quality Manager',
        phoneNumber: '+994558547525',
        isDeleted: false,
        inputId: '004FEVB5ASIEC2'
    },
    {
        id: '005FEVB5MNTJ2',
        name: 'Həqiqət',
        surname: 'Əzizova',
        dateOfBirth:'1992-02-11',
        position: 'Software Architect',
        phoneNumber: '+994515768842',
        isDeleted: false,
        inputId: '005FEVB5MNTJ2'
    },
    {
        id: '006FEVB5JJHLA2',
        name: 'Kamil',
        surname: 'Verdiyev',
        dateOfBirth:'1993-08-19',
        position: 'Application Support Analyst',
        phoneNumber: '+994552413996',
        isDeleted: false,
        inputId: '006FEVB5JJHLA2'
    },
    {
        id: '007FEVB5RABQ2', 
        name: 'Kərəm',
        surname: 'Tapdıqoğlu',
        dateOfBirth:'1986-02-10',
        position: 'UI/UX designer',
        phoneNumber: '+994515224887',
        isDeleted: false,
        inputId: '007FEVB5RABQ2'
    },
    {
        id: '008SJVB5JRUIK2',
        name: 'Lalə',
        surname: 'Vəliyeva',
        dateOfBirth:'1991-06-18',
        position: 'Front-end developer',
        phoneNumber: '+994518562468',
        isDeleted: false,
        inputId: '008SJVB5JRUIK2'
    },
    {
        id: '009FEVB5XDJCA2',
        name: 'Natiq',
        surname: 'Yolçuyev',
        dateOfBirth:'1998-03-01',
        position: 'Back-end developer',
        phoneNumber: '+994704521585',
        isDeleted: false,
        inputId: '009FEVB5XDJCA2'
    },
    {
        id: '0010DEVB5GTYI2',
       	name: 'Oruc',
        surname: 'Qasımlı',
        dateOfBirth:'1994-07-18',
        position: 'System Architect',
        phoneNumber: '+994558621740',
        isDeleted: false,
      	inputId: '0010DEVB5GTYI2'
    },
    {
        id: '0011OAAB5GTYI2',
  	    name: 'Orxan',
        surname: 'Kazımlı',
        dateOfBirth:'1982-04-21',
      	position: 'Data analyst',
      	phoneNumber: '+994507428682',
      	isDeleted: false,
        inputId: '0011OAAB5GTYI2'
    },
    {
        id: '0012TEB5GDTJQ2',
        name: 'Pərvanə',
        surname: 'Baxışova',
        dateOfBirth:'1988-02-10',
        position: 'Cloud Services Developer',
        phoneNumber: '+994708542148',
        isDeleted: false,
        inputId: '0012TEB5GDTJQ2'
    },
    {
        id: '0013XCADXGJJA2',
        name: 'Polad',
        surname: 'Cəfərov',
        dateOfBirth:'1998-12-05',
        position: 'Computer Systems Manager',
        phoneNumber: '+994512584736',
        isDeleted: false,
        inputId: '0013XCADXGJJA2'
    },
    {
        id: '0014QJHAACXJH2',
        name: 'Qabil',
        surname: 'Əsgərov',
        dateOfBirth:'1984-05-17',
        position: 'Help Desk Specialist',
        phoneNumber: '+994518427615',
        isDeleted: false,
        inputId: '0014QJHAACXJH2'
    },
    {
        id: '0015EELD0AJCD2',
        name: 'Qasım',
        surname: 'Məhəmmədli',
        dateOfBirth:'1982-08-21',
        position: 'Desktop Support Specialist',
        phoneNumber: '+994508547143',
        isDeleted: false,
        inputId: '0015EELD0AJCD2'
    },
    {
        id: '0016FEVB5JDDIK2',
        name: 'Qulu',
        surname: 'Orucov',
        dateOfBirth:'1986-10-23',
        position: 'Network Architect',
        phoneNumber: '+994556574982',
        isDeleted: false,
        inputId: '0016FEVB5JDDIK2'
    },
    {
        id: '0017FON0HPLDJ2',
        name: 'Rəhim',
        surname: 'Sakitoğlu',
        dateOfBirth:'1990-04-12',
        position: 'Cloud Consultant',
        phoneNumber: '+994705842193',
        isDeleted: false,
        inputId: '0017FON0HPLDJ2'
    },
    {
        id: '0018YCVXJHGJA2',
        name: 'Rəhman',
        surname: 'Kazımov',
        dateOfBirth:'1988-01-14',
        position: 'System administrator',
        phoneNumber: '+994558243698',
        isDeleted: false,
        inputId: '0018YCVXJHGJA2'
    },
    {
        id: '0019DCRHJJXAA2',
        name: 'Rəvan',
        surname: 'Eyvazov',
        dateOfBirth:'1991-05-24',
        position: 'Network Engineer',
        phoneNumber: '+994515423674',
        isDeleted: false,
        inputId: '0019DCRHJJXAA2'
    },
    {
        id: '0020CCJXDDKJA2',
        name: 'Rövşən',
        surname: 'Mahirli',
        dateOfBirth:'1994-07-26',
        position: 'Technical Support Engineer',
        phoneNumber: '+994505421478',
        isDeleted: false,
        inputId: '0020CCJXDDKJA2'
    },
    {
        id: '0021FEVB5DEEJ2',
        name: 'Sadiq',
        surname: 'İmranoğlu',
        dateOfBirth:'1992-03-11',
        position: 'Information Research Scientist',
        phoneNumber: '+994508475674',
        isDeleted: false,
        inputId: '0021FEVB5DEEJ2'
    },
    {
        id: '0022JBDD2AXJN2',
        name: 'Sabit',
        surname: 'Eldaroğlu',
        dateOfBirth:'1994-08-20',
        position: 'System Administrator',
        phoneNumber: '+994558423681',
        isDeleted: false,
        inputId: '0022JBDD2AXJN2'
    },
    {
        id: '0023QJBB0HQJC2',
        name: 'Sakit',
        surname: 'Ağayev',
        dateOfBirth:'1986-07-23',
        position: 'Front-end developer',
        phoneNumber: '+994519654123',
        isDeleted: false,
        inputId: '0023QJBB0HQJC2'
    },
    {
        id: '0024AAEHJJDCC2',
        name: 'Sayyad',
        surname: 'Mövsümov',
        dateOfBirth:'1984-10-21',
        position: 'Computer Network Architect',
        phoneNumber: '+994708462354',
        isDeleted: false,
        inputId: '0024AAEHJJDCC2'
    },
    {
        id: '0025UJJSAADKC2',
        name: 'Səadət',
        surname: 'Tahirov',
        dateOfBirth:'1988-01-30',
        position: 'UI/UX Designer',
        phoneNumber: '+994708542126',
        isDeleted: false,
        inputId: '0025UJJSAADKC2'
    },
    {
        id: '0026PADDJCADJ2',
        name: 'Sədaqət',
        surname: 'Cəfərova',
        dateOfBirth:'1992-04-19',
        position: 'Cloud System Engineer',
        phoneNumber: '+994518547562',
        isDeleted: false,
        inputId: '0026PADDJCADJ2'
    },
    {
        id: '0027KNHDDJXQQ2',
        name: 'Tahir',
        surname: 'Ağayev',
        dateOfBirth:'1996-10-27',
        position: 'IT Analyst',
        phoneNumber: '+994557432586',
        isDeleted: false,
        inputId: '0027KNHDDJXQQ2'
    },
    {
        id: '0028QAJJCDBJD2',
        name: 'Tapdıq',
        surname: 'Səfəroğlu',
        dateOfBirth:'1984-06-20',
        position: 'Network Administrator',
        phoneNumber: '+994504187562',
        isDeleted: false,
        inputId: '0028QAJJCDBJD2'
    },
    {
        id: '0029MJUDCAJAA2',
        name: 'Yadigar',
        surname: 'Əliağayev',
        dateOfBirth:'1990-07-28',
        position: 'Computer Systems Analyst',
        phoneNumber: '+994704571236',
        isDeleted: false,
        inputId: '0029MJUDCAJAA2'
    },
    {
        id: '0030DDLKMXCJJ2',
        name: 'Zərifə',
        surname: 'Kamandarqızı',
        dateOfBirth:'1993-03-12',
        position: 'IT Coordinator',
        phoneNumber: '+994519658458',
        isDeleted: false,
        inputId: '0030DDLKMXCJJ2'
    },
  ];

  export default employeesData
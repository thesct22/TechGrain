export const Rabioptions=[
    { value: 'wheat', label: 'Wheat', telugu:"గోధుమ"},
    { value: 'barley', label: 'Barley', telugu:"బార్లీ"},
    { value: 'peas', label: 'Peas', telugu:"బటానీలు"},
    { value: 'gram', label: 'Gram', telugu:""}
];
export const Kharifoptions=[
    { value: 'rice', label: 'Rice', telugu:""},
    { value: 'maize', label: 'Maize', telugu:""},
    { value: 'jowar', label: 'Jowar', telugu:""},
    { value: 'bajra', label: 'Bajra', telugu:""},
    { value: 'tur', label: 'Tur', telugu:""},
    { value: 'moong', label: 'Moong', telugu:""},
    { value: 'urad', label: 'Urad', telugu:""},
    { value: 'cotton', label: 'Cotton', telugu:""},
    { value: 'jute', label: 'Jute', telugu:""},
    { value: 'groundnut', label: 'Groundnut', telugu:""},
    { value: 'soybean', label: 'Soybean', telugu:""}
];
export const groupedOptions = [
    {
      label: 'Kharif Crops',
      telugu:"",
      options: Kharifoptions,
    },
    {
      label: 'Rabi Crops',
      telugu:"",
      options: Rabioptions,
    },
  ];
  
  export const cropweight=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0],
    [3,5,10,9,10,7,2,9,7,8,8,8,5,7,3,0,1,0,0,0,0,0,0],
    [9,2,4,2,2,9,8,4,6,2,5,5,8,9,3,0,0,1,0,0,0,0,0],
    [5,6,7,8,8,4,8,7,3,3,6,10,5,7,4,0,0,0,1,0,0,0,0],
    [2,4,6,8,10,10,6,3,3,4,9,4,9,4,10,0,0,0,0,1,0,0,0],
    [5,6,9,3,4,3,6,3,10,4,7,10,3,3,4,0,0,0,0,0,1,0,0],
    [1550,990,1200,1450,1380,860,950,1110,1340,1050,1580,1220,1490,1310,970,0,0,0,0,0,0,1,0]
  ]
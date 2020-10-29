export const Rabioptions=[
    { value: 'wheat', label: 'Wheat'},
    { value: 'barley', label: 'Barley'},
    { value: 'peas', label: 'Peas'},
    { value: 'gram', label: 'Gram'}
];
export const Kharifoptions=[
    { value: 'rice', label: 'Rice'},
    { value: 'maize', label: 'Maize'},
    { value: 'jowar', label: 'Jowar'},
    { value: 'bajra', label: 'Bajra'},
    { value: 'tur', label: 'Tur'},
    { value: 'moong', label: 'Moong'},
    { value: 'urad', label: 'Urad'},
    { value: 'cotton', label: 'Cotton'},
    { value: 'jute', label: 'Jute'},
    { value: 'groundnut', label: 'Groundnut'},
    { value: 'soybean', label: 'Soybean'}
];
export const groupedOptions = [
    {
      label: 'Kharif Crops',
      options: Kharifoptions,
    },
    {
      label: 'Rabi Crops',
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
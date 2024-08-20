export const color = [
    "white",
    "blue",
    "green",
];

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White'},
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green'},
        { value: 'green', label: 'Green'},
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium'},
        { value: 'large', label: 'Large'},
      ],
    },
    // Additional filters...
  ];
  

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "159 To 399" },
            { value: "399-999", label: "399 To 999" },
            { value: "999-1999", label: "999 To 1999" },
            { value: "1999-2999", label: "1999 To 2999" },
            { value: "3999-4999", label: "3999 To 4999" }
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "20% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
            { value: "60", label: "60% and above" },
            { value: "70", label: "70% and above" },
            { value: "80", label: "80% and above" }
        ]
    },
    {
        id: "material",
        name: "Material",
        options: [
            { value: "metal", label: "Metal"},
            { value: "wood", label: "Wood"},
            { value: "solid-wood", label: "Solid Wood"},
            { value: "plastic", label: "Plastic"},
            { value: "glass", label: "Glass"}
        ]
    }
];

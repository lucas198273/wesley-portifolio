export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  available?: boolean;
  imageUrl: string;
  notes?: string[];
  category: "apresentacoes" | "orquestras" | "ensaios" | "projetos";
  materials?: {
    type: string;
    price: number;
  }[];
}

export const products: Product[] = [
  {
    id: "apresentacao1",
    name: "Concerto Solo em BH",
    description: "WOlyver em apresentação solo com repertório clássico e contemporâneo.",
    imageUrl: "/assets/imgs/img1.webp",
    category: "apresentacoes",
  },
  {
    id: "apresentacao2",
    name: "Recital Intimista",
    description: "Apresentação com atmosfera minimalista e foco na expressividade do violoncelo.",
    imageUrl: "/assets/imgs/img2.webp",
    category: "apresentacoes",
  },  
  {
    id: "apresentacao2",
    name: "Recital Intimista",
    description: "Apresentação com atmosfera minimalista e foco na expressividade do violoncelo.",
    imageUrl: "/assets/imgs/img7.webp",
    category: "apresentacoes",
  },  {
    id: "apresentacao2",
    name: "Recital Intimista",
    description: "Apresentação com atmosfera minimalista e foco na expressividade do violoncelo.",
    imageUrl: "/assets/imgs/img8.webp",
    category: "apresentacoes",
  }, {
    id: "apresentacao2",
    name: "Recital Intimista",
    description: "Apresentação com atmosfera minimalista e foco na expressividade do violoncelo.",
    imageUrl: "/assets/imgs/img3.webp",
    category: "apresentacoes",
  },

  // 🎼 Orquestras
  // {
  //   id: "orquestra1",
  //   name: "Orquestra Sinfônica Jovem",
  //   description: "Participação como violoncelista convidado.",
  //   imageUrl: "/assets/portfolio/o1.webp",
  //   category: "orquestras",
  // },

  // 🎬 Ensaios
  {
    id: "ensaio1",
    name: "Estudo Técnico",
    description: "Registro dos momentos de estudo e aperfeiçoamento técnico.",
    imageUrl: "/assets/imgs/bw1.webp",
    category: "ensaios",
  },  {
    id: "ensaio1",
    name: "Estudo Técnico",
    description: "Registro dos momentos de estudo e aperfeiçoamento técnico.",
    imageUrl: "/assets/imgs/bw2.webp",
    category: "ensaios",
  },  {
    id: "ensaio1",
    name: "Estudo Técnico",
    description: "Registro dos momentos de estudo e aperfeiçoamento técnico.",
    imageUrl: "/assets/imgs/bw3.webp",
    category: "ensaios",
  },  {
    id: "ensaio1",
    name: "Estudo Técnico",
    description: "Registro dos momentos de estudo e aperfeiçoamento técnico.",
    imageUrl: "/assets/imgs/bw4.webp",
    category: "ensaios",
  },  
   {
    id: "ensaio1",
    name: "Estudo Técnico",
    description: "Registro dos momentos de estudo e aperfeiçoamento técnico.",
    imageUrl: "/assets/imgs/bw5.webp",
    category: "ensaios",
  },  
  

  // 🎵 Projetos musicais
  // {
  //   id: "projeto1",
  //   name: "Projeto Camerata",
  //   description: "Participação no projeto de música de câmara com repertório selecionado.",
  //   imageUrl: "/assets/portfolio/pr1.webp",
  //   category: "projetos",
  // },
];
